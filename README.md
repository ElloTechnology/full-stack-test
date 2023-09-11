# Ello - Full Stack Engineer Coding Challenge

### About Ello

Ello is a forward-thinking educational technology company dedicated to revolutionizing the way children learn to read. Our mission is to empower young readers with the tools they need to become proficient and passionate readers. We believe that fostering a love for reading is essential for a child's academic and personal growth

Note: Please don't fork this repository, or create a pull request against it. Otherwise other applicants may take inspiration from it. You should create another repository for the challenge. Once the coding challenge is completed, email your solution link and resume to [erin@ello.com](mailto:erin@ello.com).

## Challenge

### Part 1
Create a GraphQL server that, upon querying, returns information about a book. You can use the two books available in the `resources` folder. For this task, there's no need to set up a database. However, you are encouraged to provide a detailed solution. Please keep in mind that we will evaluate other factors, including code organization, variable naming, and more. Ensure your code is well-organized and readable. The solution should be implemented in Node.js, but feel free to utilize libraries and tools that align with your preferences.


### Part 2
In the second part of the challenge, your task is to create a React application that consumes the GraphQL API created in the first part of the challenge. Additionally, you will revisit a challenge that we have previously worked on, which will be discussed further below. You are also welcome to place both applications in the same repository.

Your objective is to design a user interface for the book. This interface should display both the left and right pages within a single view. Moreover, it should incorporate navigation buttons that allow users to advance to the next double page. It's worth noting that some pages may lack content, and it's perfectly acceptable to display a blank page in such cases. The user interface does not need to be overly intricate, and we suggest refraining from using CSS frameworks.

The next portion of the challenge is intended to assess your problem-solving skills. Therefore, it's crucial that you thoroughly grasp the problem statement. We will closely evaluate your approach to solving the problem and the clarity of your code.

Problem context: Our app utilizes a speech recognition model capable of analyzing user audio. One challenge we've encountered is ensuring consistent data that the model can recognize. This model can only identify words from the **alphabet dictionary**. For example, if the book text contains the number 100, the model can understand "one hundred" but not "100." To address this issue, we tokenize our books. This approach ensures that we can display text to the child exactly as it appears in the book while also providing words to the model that we can track. It maintains a one-to-one correspondence between the two. In our application, we combine both the original book text and tokenized text, presenting the book text in its original format to the user while passing tokenized text to the model.

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

The application is relatively simple, so you may not need to use any state management libraries. In this case, please ensure that your state management remains clean and straightforward. Additionally, we highly appreciate the utilization of the latest React features. Please remember to include clear and concise commits as you progress through the challenge.

## You will be evaluated on

- Functional correctness
- Code clarity / structure
- Comments / documentation where necessary
- CSS styling for bonus points

### Part 3
In the final part of the challenge, your task is to create an Infrastructure as Code (IAC) solution using AWS and Terraform to deploy the application, preferably using AWS Fargate or a similar service. You are encouraged to make use of the AWS free tier for this endeavor. Please strive to adhere to best practices and share your code along with URLs where the applications are deployed.

Bonus:
Set up CI/CD using a tool of your choice, preferably GitHub Actions.