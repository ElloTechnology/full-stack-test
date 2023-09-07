# Ello - Full Stack Engineer Coding Challenge

### Problem Context

At Ello, we are developing a virtual reading coach that interacts with actual books. Our app employs a speech recognition model capable of analyzing user audio. One challenge we've encountered is ensuring that we consistently provide data the model can recognize. This model can only detect words from the alphabet dictionary. For instance, if the book text contains the number 100, the model can understand "one hundred" but not "100." To resolve this issue, we tokenize our books. This approach guarantees that we can display text to the child exactly as it appears in the book while also sending words to the model that we can track, maintaining a one-to-one correspondence between the two. In our application, we combine both the original book text and tokenized text, presenting the book text in its original format to the user while passing tokenized text to the model.

Note: Please don't fork this repository, or create a pull request against it. Otherwise other applicants may take inspiration from it. You should create another repository for the challenge. Once the coding challenge is completed, email your solution link and resume to [james@helloello.com](mailto:james@helloello.com).

## Challenge

In this code challenge you will build a **ReactJS** web app from the ground up. You have to setup a GraphQL client to query our GraphQL API endpoint https://fullstack-engineer-test-n4ouilzfna-uc.a.run.app/graphql. The API will return a `book` object. You can learn more about GraphQL here https://graphql.org/learn/.

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

To ensure the punctuation is retained and that the text behaves correctly when wrapped, consider the following:

- Retaining Punctuation: Make sure to keep punctuation marks (e.g., commas, periods, quotation marks) in their original positions within the text. For example, do not change `"The quick-thinking boy earned 50 pennies."` to `The quick thinking boy earned 50 pennies` by removing punctuation.

- Handling Wrapping: When the text is wrapped to fit within the available space, ensure that punctuation marks remain adjacent to the words they belong to. For instance, if "The quick-thinking boy earned 50 pennies." is wrapped, make sure that the `"` remains next to `The`, and they do not end up on different lines, even if the screen size is adjusted.

**Tip**: Avoid splitting the page content using spaces or other punctuation marks and then relying on the index to obtain the token. This approach may fail in certain edge cases, such as when dealing with hyphens. Instead, consider how you can utilize the token positions to extract clickable words. For example, `The` should be a clickable word, but not the quoted version, `"The` Ensure that the displayed page content remains unchanged, preserving punctuation and capitalization.

![](https://github.com/ElloTechnology/full-stack-test/blob/main/ezgif-4-61ef17b8bc.gif)

Here is sample of what we have, your UI doesn't have to be similar, and there are no images for the challenge, feel free to be as creative as you want.

### Part 2

Create a user interface for the book. It should show the left and right pages on a single view, there should be some navigation button that will allow a user to move to the next double page. This should work in tandem with Part 1, i.e. The content on each page should be clickable. Please note that some pages might have no content and that is okay; just show a blank page. The UI doesn't have to be complex. Avoid CSS frameworks.

___

The application is fairly simple, so you might not want to use any state management libraries – in this case please make sure your state management is clean and simple. As well, we value the use of the latest features of React. Make sure to include clear and concise commits while working through the challenge.

## You will be evaluated on

- Functional correctness
- Code clarity / structure
- Comments / documentation where necessary
- CSS styling for bonus points
