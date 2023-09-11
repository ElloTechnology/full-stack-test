# Ello - Full Stack Engineer Coding Challenge

### Problem Context

At Ello, we are developing a virtual reading coach that interacts with actual books. Our app employs a speech recognition model capable of analyzing user audio. One challenge we've encountered is ensuring that we consistently provide data the model can recognize. This model can only detect words from the alphabet dictionary. For instance, if the book text contains the number 100, the model can understand "one hundred" but not "100." To resolve this issue, we tokenize our books. This approach guarantees that we can display text to the child exactly as it appears in the book while also sending words to the model that we can track, maintaining a one-to-one correspondence between the two. In our application, we combine both the original book text and tokenized text, presenting the book text in its original format to the user while passing tokenized text to the model.

Note: Please don't fork this repository, or create a pull request against it. Otherwise other applicants may take inspiration from it. You should create another repository for the challenge. Once the coding challenge is completed, email your solution link and resume to [james@helloello.com](mailto:james@helloello.com).

## Challenge

### Part 1
Write a GraghQL server that when queried  will return a book, use the 2 books in the `resources` folder. You don't need to set up a database for the task but you can go into as much detail in your solution as you want. Keep it in mind we will be looking into other factors too such as code organisation, variable naming e.t.c so be sure to put your step forward for well organised and readable code. The solution should be implemented in Node.js but feel free to use whatever libraries and tools that fits you.


### Part 2
In the second part of the challenge you are going to create a React application that consumes the GraphQL API created in the first part of the challenge, you will then try to solve challenge that we have also worked on before, more on the challenge below. You can put both applications in the same repository.

Create a user interface for the book. It should show the left and right pages on a single view, there should be some navigation button that will allow a user to move to the next double page. Please note that some pages might have no content and that is okay; just show a blank page. The UI doesn't have to be complex. Avoid CSS frameworks.

This next part of the challenge meant to look into your problem solving skills, so make sure you understand the problem, we'll be paying close attention on how you go about solving the problem and how easy it is to follow your code.

The book has a field called `pages` which is an array of page objects. The page objects contain a field called `content` which is the page text and another field called `tokens` which is an array of tokenized page text.

For example page content might look like this:

```
"\"The quick-thinking boy earned 50 pennies.\""
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

The first task will be to map the `tokens` to the page `content`, and represent it in a view. The view should show the page `content` in its original format. The words should be clickable and when clicked they should take us to a second view which will display the token `value`. E.g If I click `50` in `"The quick-thinking boy earned 50 pennies."` It should open another view and pass `fifty` from the `tokens` array to that view.

To ensure the punctuation is retained and that the text behaves correctly when wrapped, consider the following:

- Retaining Punctuation: Make sure to keep punctuation marks (e.g., commas, periods, quotation marks) in their original positions within the text. For example, do not change `"The quick-thinking boy earned 50 pennies."` to `The quick thinking boy earned 50 pennies` by removing punctuation.

- Handling Wrapping: When the text is wrapped to fit within the available space, ensure that punctuation marks remain adjacent to the words they belong to. For instance, if "The quick-thinking boy earned 50 pennies." is wrapped, make sure that the `"` remains next to `The`, and they do not end up on different lines, even if the screen size is adjusted.

  <img width="555" alt="Screenshot 2023-09-07 at 14 39 26" src="https://github.com/ElloTechnology/full-stack-test/assets/3518127/a6c7771a-7cd7-4685-8509-c2ccc74b33c3">

  Make sure pronounciation is correctly aligned

  <img width="295" alt="Screenshot 2023-09-07 at 17 13 00" src="https://github.com/ElloTechnology/full-stack-test/assets/3518127/9c0f448e-73ba-435c-b996-6b50784dfb45">



**Tip**: Avoid splitting the page content using space delimeters then relying on the index to obtain the token.

![](https://github.com/ElloTechnology/full-stack-test/blob/main/ezgif-4-61ef17b8bc.gif)

Here is sample of what we have, your UI doesn't have to be similar, and there are no images for the challenge, feel free to be as creative as you want.

___

The application is fairly simple, so you might not want to use any state management libraries – in this case please make sure your state management is clean and simple. As well, we value the use of the latest features of React. Make sure to include clear and concise commits while working through the challenge.

## You will be evaluated on

- Functional correctness
- Code clarity / structure
- Comments / documentation where necessary
- CSS styling for bonus points

### Part 3
In the final part of the challenge, your task is to create an Infrastructure as Code (IAC) solution using AWS and Terraform to deploy the application, preferably using AWS Fargate or a similar service. You are encouraged to make use of the AWS free tier for this endeavor. Please strive to adhere to best practices and share your code along with URLs where the applications are deployed.

Bonus:
Set up CI/CD using a tool of your choice (prefarrably Github actions)