# Bookmark'd App
#### By Quentin Bartholomew, Jarathel Jean, and Ras Au-t Amam

## Project Summary

Bookmark'd is an app that allows a user to bookmark their favorite websites for easy access/navigation. This is an easy alternative to any native browser's bookmarking functionality, and one that will be accessible across all browsers and platforms.

## Components

* Header

* Main

## Pages

* Index

* Show

## Route Table

| Route | Component | Description |
|-----|--------|--------|
| / | <Main /> | Homepage
| /bookmarks | <Index /> | Displays all active websites bookmarked by user
| /bookmarks/:id | <Show /> | Displays a specific bookmark

## User Stories

A user should be greeted with a welcome message on the homepage

A user should be able to view all of their currely bookmarked sites

A user should be able to add a new website to their bookmarks

A user should be able to edit a bookmark

A user should be able to delete a bookmark

A user should be able to click a bookmark and have a new tab open redirecting them to that website

## Challenges

The initial division of labor was probably our biggest hurdle, however once we had came up with a gameplan it was off to the races. All team members were very quick with their turnaround time, and the day prior to presentations our focus was turned towards the styling.

## List of Technologies

* CSS

* JS/Jquery/JSX

* Express

* React

* Mongoose

## Component Tree

* App
    - Header
    - Main
        - Index
        - Show