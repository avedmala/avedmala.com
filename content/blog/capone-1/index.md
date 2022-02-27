---
title: Summer at Capital One
date: '2021-08-13T12:00:00.00Z'
description: 'Thoughts on my first Internship'
---

### Week 1

The first week was a little boring. We went through all the standard onboarding processes, which was a bit of a pain. Some of the trainings were pretty tedious.

The other notable event was meeting our mentors: Paul and Shruti.

### Week 2

By the second week, we began participating in daily standup with the NLP Services team. It was my first experience with Agile so we learned the basics. At this point, we recieved our problem statement and started planning how we were going to approach the problem.

(To break down the problem into what needed to be done: we needed to add topic and summary processing components to an existing Intelligent Search API to provide topic identification insight.)

We didn't have a clear idea of what we were going to do since we were working with a proprietary Capital One technology and everything was left open ended. However, this was for the best, Paul took the approach of guiding us towards the solution rather than telling us exactly what to do and we defeningly learned more that way.

### Week 3-4

By week three were ready to start working on the problem and writing code. There was one issue, two of the components we needed for our project were still being worked on. These proprietary components served as wrappers around a Topic and Summary processor which used the LDA and RAKE algorithms.

While we waited, we began experimenting with the underlying processors in Jupyter. We started out with running example notebooks.

Then, we stepped it up to doing some data exploration with a call transcript dataset. We created some visualizations with Matplotlib and shared them with the business partner.

### Week 5

The components still weren't ready so we spent this week contributing by doing some housekeeping. We updated some dependencies across several repositories. This gave us a better understanding of the codebase and was when we made our first Pull Requests.

We were also introduced to pylint and pytest. All our code needed to be above a pylint score of 9.0 and we needed at least 80% line coverage with our tests.

### Week 6

We continued testing the search-api codebase and ran into a segfault. We spent a few days using pdb and stepping through the code to find the root cause. In the end, we had to use a workaround which involved running the code from a Docker container.

It was frustrating to be stuck on a bug but in the end we learned Docker which was a cool outcome.

At this point, we've been waiting several weeks on the components so we decided to finish them up ourselves.

### Week 7

Building out the components was difficult at first but we were able to get them working. We wrote tests, made changes as per the reviews, and merged them into the master branch.

We were also able to integrate the components with our search-api codebase. The components were able to be run using API calls.

We also got the chance to prepare some slides on our progress and present them during a larger Sprint Demos meeting. It served as practice for our final presentation and it was nice to get some question and feedback from others.

### Week 8

Some more dependancy issues popped up so we had to make some PRs across a few codebases to fix them.

We created a custom consolidator component which allowed us to aggregate the results from the topic and summary processors into the original dataset. The backend was now where we wanted it to be.

As for the frontend, we reused a React codebase created by previous interns and refactored it to work with our backend. It was cool to see some continuity in the programe. At this point, our original project was considered done.

### Week 9

With two weeks left and most of our work done, we needed a plan for the rest of the Internship. We decided to combine our project with the other Interns' projects and create a final product.

Our project did topic and summary processing and the other Interns' projects was an OCR processor which retrieved text from images and PDFs. The goal was to have a search service which uses PDFs as input and makes them searchable with the topic and summary insights we generated.

I was responsible for creating a new workflow and a new API endpoint. I decided to document the entire API in OpenAPI which is a standard for REST APIs.

The endpoint was an upload endpoint which sent files to the backend in the form of byte arrays.

### Week 10

This was the final week before our final presentation. Our focus was on making the project presentable for a Demo. We did some text cleaning to make sure everything was readable.

We also did some styling with the frontend to make a more presentable UI. This included using Lottie for loading animations. We extended the functionality of the frontend to be able to filter the search results based on document title or dominant topic keywords.

The highlight of this week however was getting the chance to meet the team in person. Some of the team members were in NYC and I was in NJ with another intern so we drove up and met everyone. It was really cool to finally see everyone and get to know them more.

### Week 11

We spent this week making our slides and practicing our presentation. We went back over and over and made changes to the slides and presentation using feedback from our mentors.

In the end, we delivered a really smooth presentation.
