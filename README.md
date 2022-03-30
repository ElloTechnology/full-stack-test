---
title: Full stack engineer challange
created: '2022-03-24T10:33:56.987Z'
modified: '2022-03-24T12:45:18.489Z'
---

# Ello - Fullstack Engineer code challenge

This repository contains the challenge for full stack engineers.

Note: Please don't fork this repository, or create a pull request against it. Otherwise other applicants may take inspiration from it. Once the coding challenge is completed, you can submit it via this Google form (Todo create google form and link it here)

In this code challenge you will build a ReactJS that will call a GraphQL API (Todo add APi link here), the API will return a `book` object.

The book has a field called `pages` which is an array of page objects. The page objects contain a field called `content` which is the page content and another field called `tokens` which is an array of broken down page contents.

For example page content might look like this:

```
"Here is my house," said the little pig. "I like my house."
```

and the `tokens` for this for this `content` look like this

```
[
{
  "position": [
    1,
    5
  ],
  "value": "here"
},
{
  "position": [
    6,
    8
  ],
  "value": "is"
},
{
  "position": [
    9,
    11
  ],
  "value": "my"
},
{
  "position": [
    12,
    17
  ],
  "value": "house"
},
{
  "position": [
    20,
    24
  ],
  "value": "said"
},
{
  "position": [
    25,
    28
  ],
  "value": "the"
},
{
  "position": [
    29,
    35
  ],
  "value": "little"
},
{
  "position": [
    36,
    39
  ],
  "value": "pig"
},
{
  "position": [
    42,
    43
  ],
  "value": "i"
},
{
  "position": [
    44,
    48
  ],
  "value": "like"
},
{
  "position": [
    49,
    51
  ],
  "value": "my"
},
{
  "position": [
    52,
    57
  ],
  "value": "house"
}
]
```

`position` is an array containing the start and end index of a `value` (word). Notice that we take into account staces and panctation when determining the position. Also notice that `tokens` are all the words excluding `panctuation` and `spaces`.

### Task 1:

The first task will be to map the `tokens` to the page `content`, and represent it in a view. The first view should show the page `content` including the panctuation and spaces, basically as it is. However the words should be clickable and when clicked they should take us to a second view which will display the token `value`. E.g If I click `Here` in `"Here is my house," said the little pig. "I like my house."` It should open another view and pass `here` from the `tokens` array to that view and display it.

Make sure to make the text large enough to be clickable. Also take into account how panctuation will react when the text is wrapped, i.e if `"I like my house."` is wrapped the `"` should still be next to the `I`. They should not end up on different lines.

### Task 2:

Create a user interface for the book. It should show the left and right pages on a single view, there should then be some navigation button that will allow a user to more to the next double page. This should work in tandem with Task 1 i.e. The content on each page should be clickable. Please not that some pages might have no content, that is okay just show a blank page. The UI doesn't have to be complex, you can just use cards to show the left and right page.

### Bonus:

Package the app with Docker


