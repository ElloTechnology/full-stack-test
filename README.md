# Ello - Full Stack Engineer Coding Challenge

### Problem Context

At Ello we are building a virtual reading coach that works with real books. As part of the Ello app we have a speech recognition model that listens to users audio. One of the problems that we have had to solve is to make sure we always pass data that the model can recognize, for instance if we have the number `100` in the book text, the model can interpret `one hundred` but not `100`. To solve this issue we tokenized our books. Tokens help us to ensure that for all our book content we have text that the model can recognize. We then use a combination of book text and tokens in the application where we present the book text in its original format to the user, but pass tokenized text to the model.

Note: Please don't fork this repository, or create a pull request against it. Otherwise other applicants may take inspiration from it. You should create another repository for the challenge. Once the coding challenge is completed, email your solution link and resume to [james@helloello.com](mailto:james@helloello.com).

## Challenge

In this code challenge you will build a ReactJS web app from the ground up. You have to setup a GraphQL client to query our GraphQL API endpoint https://fullstack-engineer-test-n4ouilzfna-uc.a.run.app/graphql. The API will return a `book` object. You can learn more about GraphQL here https://graphql.org/learn/.

The book has a field called `pages` which is an array of page objects. The page objects contain a field called `content` which is the page text and another field called `tokens` which is an array of tokenized page text.

For example page content might look like this:

```
"A cow has 4 legs."
```

and the `tokens` for this for this `content` looks like this


```
[
{
  "position": [
    1,
    2
  ],
  "value": "a"
},
{
  "position": [
    3,
    6
  ],
  "value": "cow"
},
{
  "position": [
    7,
    10
  ],
  "value": "has"
},
{
  "position": [
    11,
    12
  ],
  "value": "four"
},
{
  "position": [
    13,
    17
  ],
  "value": "legs"
}
]
```

`position` is an array containing the start and end index of a word.

### Challenge 1

The first task will be to map the `tokens` to the page `content`, and represent it in a view. The view should show the page `content` in it's original format. The words should be clickable and when clicked they should take us to a second view which will display the token `value`. E.g If I click `4` in `"A cow has 4 legs."` It should open another view and pass `four` from the `tokens` array to that view.

Make sure to make the text large enough to be clickable. Also take into account how punctuation will react when the text is wrapped, i.e if `"A cow has 4 legs."` is wrapped the `"` should still be next to the `A`. They should not end up on different lines.

### Challenge 2

Create a user interface for the book. It should show the left and right pages on a single view, there should be some navigation button that will allow a user to move to the next double page. This should work in tandem with Challenge 1 i.e. The content on each page should be clickable. Please note that some pages might have no content, that is okay, just show a blank page. The UI doesn't have to be complex, avoid CSS frameworks.

___

The application is fairly simple, so you might not want to use any state management libraries – in this case please make sure your state management is clean and simple. As well, we value the use of the latest features of react. Make sure to include clear and concise commits while working through the challenge.

## You will be evaluated on

- Functional correctness
- Code clarity/structure
- Comments/documentation where necessary
- Cdd style for bonus points
