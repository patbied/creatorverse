# WEB103 Prework - Creatorverse

Submitted by: Patrick Biedermann

About this web app: This project is a simple website made using react on the frontend and supabase as the backend. It suports basic CRUD features. Any user can go on the website and view creators, add a creator, delete a creator, and update a creator.

Time spent: ~5 hours
## Required Features

The following **required** functionality is completed:

- [x] **A logical component structure in React is used to create the frontend of the app**
- [x] **At least five content creators are displayed on the homepage of the app**
- [x] **Each content creator item includes their name, a link to their channel/page, and a short description of their content**
- [x] **API calls use the async/await design pattern via Axios or fetch()**
- [x] **Clicking on a content creator item takes the user to their details page, which includes their name, url, and description**
- [x] **Each content creator has their own unique URL**
- [x] **The user can edit a content creator to change their name, url, or description**
- [x] **The user can delete a content creator**
- [x] **The user can add a new content creator by entering a name, url, or description and then it is displayed on the homepage**

The following **optional** features are implemented:

- [x] Picocss is used to style HTML elements
- [x] The content creator items are displayed in a creative format, like cards instead of a list
- [x] An image of each content creator is shown on their content creator card

The following **additional** features are implemented:

* [x] Simple loading bars using picoCSS <progress> element and useState to manage loading during requests
* [x] Simple error handling/success messages using useState 

## Video Walkthrough

Here's a walkthrough of implemented required features:
https://imgur.com/a/8Vx0f58
👉🏿<img src='https://imgur.com/a/8Vx0f58.gif' title='Patrick Biedermann - Creatorverse Video Walkthrough' width='' alt='Patrick Biedermann - Creatorverse Video Walkthrough' />
![](creatorverse_gif.gif)

<!-- Replace this with whatever GIF tool you used! -->
GIF created with LiceCap
<!-- Recommended tools:
[Kap](https://getkap.co/) for macOS
[ScreenToGif](https://www.screentogif.com/) for Windows
[peek](https://github.com/phw/peek) for Linux. -->

## Notes
This was my first time using supabase, but I found the experience very pleasant. The walkthrough made it so I knew what direction to go in and the supabase JS documentation is phenomenal. One issue I struggled with was uploading images, which I figured out how to do with supabase buckets eventually. The project overall was simple as I have a fair amount of experience working with react and nothing, but supabase, was new to me. Thank you for considering me for this program and I look forward to the upcoming lessons and projects. I considered creating custom hooks for repetitive actions such as fetching users, but decided against it as I believe that may be too much for this task. If I was planning on working on this project further (which the course may do, and in that case I would create custom hooks) I would create features such as custom hooks to keep it more maintainable. Another thing to note is that the react project is not built and still in dev form, as the instructions did not specific to build.


## License

Copyright 2023 Patrick Biedermann

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

> http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
