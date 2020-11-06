CREATE TABLE [dbo].[Strength] (
    [Strength Workout]         BIT        NOT NULL,
    [Benchpress Reps] NCHAR (10) NULL,
    [Benchpress Rounds]      NCHAR (10) NULL,
    [Squats Reps] NCHAR (10) NULL,
    [Squats Rounds]   NCHAR (10) NULL,
    [Powerclean Reps] NCHAR(10) NULL, 
    [Powerclean Rounds] NCHAR(10) NULL, 
    [Deadlift Reps] NCHAR(10) NULL, 
    [Deadlift Rounds] NCHAR(10) NULL, 
    PRIMARY KEY CLUSTERED ([Strength Workout] ASC)
);

