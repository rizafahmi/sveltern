# Sveltern

Learning management system build with Sveltekit and Pocketbase.

Doing build in public style in livestreaming format. Follow along video:
[![Part 1](https://i.ytimg.com/vi/rECkmhMt4no/maxresdefault.jpg)](https://youtube.com/watch?v=rECkmhMt4no)

[![Part 2](https://i.ytimg.com/vi/UmbJdEww9S0/maxresdefault.jpg)](https://youtube.com/watch?v=UmbJdEww9S0)

## Brainstorming

### Functional requirements

- As a user, I can see list of coures, so I can learn or take the course
- As a user, I can see the detail course, so I can learn from the material or video

### Non-functional requirements

- Using Sveltekit as frontend of the application
- Using Pocketbase as the backend
- Using open-props
- Deployment (TBD)

### High-level design

#### Course Index

![course list](./courses-list.png)

#### Course detail

![course detail](./course-detail.png)

### Models

- courses
    - id
    - title
    - description
    - thumbnail
    
- chapters
    - id
    - title
    - description
    - video_url
    - order
    - course_id
    
- categories (TBD)



## Getting started

Run pocketbase first:

``` bash
$ ./pocketbase serve
```

Run Sveltekit in dev mode

``` bash
$ npm run dev # or pnpm dev
```

## TODO

- [x] Install styling library
- [x] Layout with open-props
- [x] Card for courses
- [x] Detail page
- [x] Add Chapters table db
- [x] Show chapters detail
- [x] Styling detail page
- [x] Show detail page per each chapters
- [x] Redirection logic for each chapter
- [x] Styling active chapter
- [ ] Refactor detail page
  - Using #await
- [ ] URL dengan slug (pengganti id)
- [ ] Fitur realtime dengan pocketbase subscribe (mohon bantuannya)
- [ ] Deploy
- [ ] Form upload content (tentative)
- [ ] Auth (tentative)
- [ ] Menggunakan aspect ratio untuk thumbnail youtube
- [ ] Solusi untuk loading thumbnail youtube (tentaive)

## Prompts GPT

Prompt template: 
1. State clear and desired output
2. Give context of the product we build
3. Describe exactly what it should contain
4. Final goal for a reminder or highlight

### Prompts
#### Prompt for course index page
Create layout in html and css with header, main and footer

Improved Prompt

```text
Your task is to create HTML and CSS for a system or application that described by the text delimeted by triple dash below.

Create page for the list of courses in card display with thumbnail, title, description and an action button.

Consider the following guidelines for the code:
- Ensure the code is simple and easy to understand
- Avoid using complex CSS features
- If possible, use open-props.style for the CSS
- Use an elegant and neutral color palette based on open-props colors
- Use neo-brutalism design style

Your final result should be bold, engaging and visually appealing list page that effectively showcases the Sveltern brand.

---
Sveltern is a simple learning management system for visual learner and provide engaging video courses.
---
```
