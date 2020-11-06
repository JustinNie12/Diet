CREATE TABLE [dbo].[UserInfo] (
    [UserId]      INT        NOT NULL,
    [UserName]    TEXT       NOT NULL,
    [Weight]      INT        NOT NULL,
    [Height]      INT        NOT NULL,
    [Age]         NCHAR (10) NOT NULL,
    [DateOfBirth] DATE       NOT NULL,
    PRIMARY KEY CLUSTERED ([UserId] ASC)
);

