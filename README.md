# Ello - Fullstack Engineer Coding Challenge

### Challenge Context
At Ello we are building a virtual reading coach that works with real books. As part of the Ello app we have an AI model that listens to users audio. One of the problems that we have had to solve is to make sure we always pass data that the AI model can recognize, for instance if we have the number `100` in the book text, the AI model can interpret `one hundred` but not `100`. To solve this issue we tokenized our books making sure that for all our book content we have tokens, which is the same text but in a format that the AI model can recognize. We then use a combination of book text and tokens in the application where we present the book text in its original format to the user, but pass tokens to the AI model.


Note: Please don't fork this repository, or create a pull request against it. Otherwise other applicants may take inspiration from it. Once the coding challenge is completed, email your solution (Github link) and resume to [james@helloello.com](mailto:james@helloello.com).


## Challenge
In this code challenge you will build a ReactJS web app that will call a [GraphQL API](https://fullstack-engineer-test-n4ouilzfna-uc.a.run.app/graphql), the API will return a `book` object.

The book has a field called `pages` which is an array of page objects. The page objects contain a field called `content` which is the page content and another field called `tokens` which is an array of tokenized page contents.

For example page content might look like this:

```
"A cow has 4 legs."
```

and the `tokens` for this for this `content` look like this

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

`position` is an array containing the start and end index of a `value` (word).

### Task 1:

The first task will be to map the `tokens` to the page `content`, and represent it in a view. The view should show the page `content` in it's original format. The words should be clickable and when clicked they should take us to a second view which will display the token `value`. E.g If I click `4` in `"A cow has 4 legs."` It should open another view and pass `four` from the `tokens` array to that view and display it.

Make sure to make the text large enough to be clickable. Also take into account how panctuation will react when the text is wrapped, i.e if `"A cow has 4 legs."` is wrapped the `"` should still be next to the `A`. They should not end up on different lines.

### Task 2:

Create a user interface for the book. It should show the left and right pages on a single view, there should be some navigation button that will allow a user to move to the next double page. This should work in tandem with Task 1 i.e. The content on each page should be clickable. Please note that some pages might have no content, that is okay just show a blank page. The UI doesn't have to be complex, you can just use cards to show the left and right page.