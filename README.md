# Ello - Full Stack Engineer Coding Challenge

### Problem Context

At Ello we are building a virtual reading coach that works with real books. Our app uses  a speech recognition model that listens to the user’s audio. One of the problems that we have had to solve is to make sure we always pass data that the model can recognize. The model can only listen for words in the alpha dictionary. If we have the number 100 in the book text, the model can interpret `one hundred` but not `100`. To solve this issue we tokenized our books. This helps us to ensure that we can display text to the child exactly the way it is written in the book and also pass words to the model that we can track, with one-to-one correspondence between the two. We use a combination of book text and tokens in the application where we present the book text in its original format to the user, but pass tokenized text to the model.

Note: Please don't fork this repository, or create a pull request against it. Otherwise other applicants may take inspiration from it. You should create another repository for the challenge. Once the coding challenge is completed, email your solution link and resume to [james@helloello.com](mailto:james@helloello.com).

## Challenge

In this code challenge you will build a ReactJS web app from the ground up. You have to setup a GraphQL client to query our GraphQL API endpoint https://fullstack-engineer-test-n4ouilzfna-uc.a.run.app/graphql. The API will return a `book` object. You can learn more about GraphQL here https://graphql.org/learn/.

The book has a field called `pages` which is an array of page objects. The page objects contain a field called `content` which is the page text and another field called `tokens` which is an array of tokenized page text.

For example page content might look like this:

```
"The quick-thinking boy earned 50 pennies."
```

and the `tokens` for this for this `content` looks like this


```
[
{
  "position": [
    1,
    4
  ],
  "value": "the"
},
{
  "position": [
    5,
    10
  ],
  "value": "quick"
},
{
  "position": [
    11,
    19
  ],
  "value": "thinking"
},
{
  "position": [
    20,
    23
  ],
  "value": "boy"
},
{
  "position": [
    24,
    30
  ],
  "value": "earned"
},
{
  "position": [
    31,
    33
  ],
  "value": "fifty"
},
{
  "position": [
    34,
    41
  ],
  "value": "pennies"
}
]
```

`position` is an array containing the start and end index of a word.

### Part 1

The first task will be to map the `tokens` to the page `content`, and represent it in a view. The view should show the page `content` in its original format. The words should be clickable and when clicked they should take us to a second view which will display the token `value`. E.g If I click `50` in `"The quick-thinking boy earned 50 pennies."` It should open another view and pass `fifty` from the `tokens` array to that view.

Make sure to make the text large enough to be clickable. Also take into account how punctuation will react when the text is wrapped, i.e if `"The quick-thinking boy earned 50 pennies."` is wrapped the `"` should still be next to the `A`. They should not end up on different lines, even if we resize the screen.

Tip: Avoid splitting page content using space or any other punctuation and using the index to get the token. In some edge cases this will fail, e.g. if you split using space then it will fail when we have hyphens. Think about how you can use the token `position` to extract clickable words e.g `The` should be the clickable word but not `"The`. The page `content` displayed must be **exactly** the same, do not delete punctuation, or capitalize words.

### Part 2

Create a user interface for the book. It should show the left and right pages on a single view, there should be some navigation button that will allow a user to move to the next double page. This should work in tandem with Part 1, i.e. The content on each page should be clickable. Please note that some pages might have no content and that is okay; just show a blank page. The UI doesn't have to be complex. Avoid CSS frameworks.

___

The application is fairly simple, so you might not want to use any state management libraries – in this case please make sure your state management is clean and simple. As well, we value the use of the latest features of React. Make sure to include clear and concise commits while working through the challenge.

## You will be evaluated on

- Functional correctness
- Code clarity / structure
- Comments / documentation where necessary
- CSS styling for bonus points
