Create database SmartSplit;

use SmartSplit;

CREATE TABLE Account(
  account_ID INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  account_Name VARCHAR(45) NOT NULL,
  account_Password VARCHAR(45) NOT NULL,
  account_Email VARCHAR(45) NOT NULL
  );


CREATE TABLE Friend(
  friend_ID INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  friend_FirstName VARCHAR(45) NOT NULL,
  friend_LastName VARCHAR(45) NOT NULL,
  friend_Email VARCHAR(45) NOT NULL,
  friend_PhoneNumber VARCHAR(15) NOT NULL,
  friend_account_ID int NOT NULL,
  CONSTRAINT FK_account_ID FOREIGN KEY(friend_account_ID) REFERENCES Account(account_ID)
);


  CREATE TABLE Groups(
    group_ID INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    group_Name VARCHAR(45) NOT NULL,
    group_Friend_ID INT NOT NULL,
    CONSTRAINT FK_group_Friend_ID FOREIGN KEY(group_Friend_ID) REFERENCES Friend(friend_ID)
  );


CREATE TABLE FriendhasGroup(
  friend_ID int NOT NULL,
  group_ID int NOT NULL,
  CONSTRAINT FriendhasGroup PRIMARY KEY (friend_ID, group_ID),
  CONSTRAINT FK_Group FOREIGN KEY (group_ID) REFERENCES Groups(group_ID),
  CONSTRAINT FK_Friend FOREIGN KEY(friend_ID) REFERENCES Friend(friend_ID)
);

CREATE TABLE Bill(
  bill_ID INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  bill_Name VARCHAR(45) NOT NULL,
  bill_Amount DECIMAL NOT NULL,
  bill_Currency VARCHAR(5) NOT NULL,
  bill_Type VARCHAR(45) NOT NULL,
  bill_SplitRatio VARCHAR(10) NOT NULL,
  bill_DueDate DATE NOT NULL,
  bill_Account_ID INT NOT NULL,
  CONSTRAINT FK_bill_Account_ID FOREIGN KEY(bill_Account_ID) REFERENCES Account(account_ID)
);

CREATE TABLE FriendhasBill(
  friend_ID int NOT NULL,
  bill_ID int NOT NULL,
  CONSTRAINT FriendhasGroup PRIMARY KEY (friend_ID, bill_ID),
  CONSTRAINT FK_Bill FOREIGN KEY (bill_ID) REFERENCES Bill(bill_ID),
  CONSTRAINT FK_Friendbill FOREIGN KEY(friend_ID) REFERENCES Friend(friend_ID)
);
