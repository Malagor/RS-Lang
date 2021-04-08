import React, { FC, useEffect } from 'react';

import { Container } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { gamesData } from 'appConstants/games';
import { setPageTitle } from 'store/commonState/actions';
import { ErrorMessage } from 'components';
import { selectUserId } from 'modules/Login/selectors';
import { LocStore } from 'services';
import { updateStatistics } from './actions';
import {
  selectLearnedWordsByDays,
  selectGamesStatistics,
  selectLearnedWords,
  selectStatisticsError,
} from './selectors';
import { AllTimeBlock, TodayBlock } from './components';
import { useStyles } from './styled';

export const StatisticsPage: FC = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const learnedWordsByDays = useSelector(selectLearnedWordsByDays);
  const error = useSelector(selectStatisticsError);
  const userId = useSelector(selectUserId);
  const statisticsLearnedWords = useSelector(selectLearnedWords);
  const serverGamesStatistics = useSelector(selectGamesStatistics);

  const gamesStatistics = userId
    ? serverGamesStatistics
    : LocStore.getGamesStatistics()?.[new Date().toDateString()] || {};

  const accuraciesArray = gamesData
    .map(({ name }) =>
      gamesStatistics?.[name] ? gamesStatistics[name].accuracy || 0 : null
    )
    .filter((game) => game !== null);

  const totalAccuracy = Math.round(
    accuraciesArray.reduce((a, b) => a + b, 0) / accuraciesArray.length || 0
  );

  const learnedWords = userId
    ? statisticsLearnedWords
    : gamesData
        .map(({ name }) => gamesStatistics?.[name]?.wordsStudied || 0)
        .reduce((a, b) => a + b, 0);

  useEffect(() => {
    dispatch(setPageTitle('Statistics'));
  }, [dispatch]);

  useEffect(() => {
    if (userId) {
      dispatch(updateStatistics(userId));
    }
  }, [dispatch, userId]);

  return (
    <Container>
      {error && <ErrorMessage />}
      {!error && (
        <div className={classes.container}>
          <div className={classes.wrapper}>
            <h2 className={classes.title}>Today</h2>
            <TodayBlock
              learnedWords={learnedWords}
              accuracy={totalAccuracy}
              gamesStatistics={gamesStatistics}
            />
            {userId && (
              <>
                <h2 className={classes.title}>All time</h2>
                <AllTimeBlock learnedWordsByDays={learnedWordsByDays} />
              </>
            )}
          </div>
        </div>
      )}
    </Container>
  );
};
