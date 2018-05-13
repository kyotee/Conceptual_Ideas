# Conceptual Ideas

[![Build Status](https://travis-ci.org/tamkylet/Conceptual_Ideas-tamkylet.svg?branch=master)](https://travis-ci.org/tamkylet/Conceptual_Ideas-tamkylet)

Associated web based application serves as learning of various software libraries, frameworks, and other technologies with use of (and in addition to learning as well) Ruby on Rails. Intent for learning is related to personal interests and ambition in achieving competence in skills required for industry.

## Application URL

https://conceptual-ideas.herokuapp.com/

## Table of Contents

- [Technologies](#Technologies)
- [APIs](#APIs)
- [Format](#Format)
- [Accessibility](#Accessibility)
- [Commitment](#Commitment)
- [Questions or Concerns](#Questions-or-Concerns)
- [Learning Queue](#Learning-Queue)

## <a name="Technologies"></a>Technologies

Application currently utilizes the following methods and technologies:

- `Ruby on Rails`<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;web application framework
- `Travis CI`<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;continuous integration service that builds and executes RSpec/Capybara tests (every git push)
- `Heroku`<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;host server for application (must pass their build before every deployment)
- `Built-in debug method from Ruby on Rails`<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;intuitive debugging information
- `Built-in params.require method from Ruby on Rails`<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;only accept permitted input values
- `Bcrypt`<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;secure hashing and salting for sensitive information
- `SSL from Heroku server`<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;encrypt packets of information
- `RSpec; Capybara; Factory Bot`<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;quality assurance
- `Selenium (browser based); Poltergeist (headless)`<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;web testing drivers
- `Media Queries`<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;responsive web design (ex mobile and tablet resolution support)
- `React; Babel; ES6; Redux; Webpack; Yarn`<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;JavaScript libraries with associated syntax and managers

## <a name="APIs"></a>APIs

In addition, application currently utilizes the following APIs:
- `Rails Internationalization (I18n)`
- `Google Maps`
- `Write xlsx`

## <a name="Format"></a>Format

Each feature implemented into this application represents an epic with associated user stories, quality assurance (QA) checklist and reflection of problems encountered as well as implementation choices. To see this documentation visit: https://drive.google.com/open?id=1aC4IzSaJYS0I-9aukyNbc9CqeaEBEHCb. At the moment the following epics have been implemented with considerations for security and vigorous testing:

- `01 - Sign Up and Sign In Form`<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Intuitive sign up sign in form
- `02 - Notification Messages`<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Notification messages on status for users 
- `03 - College Course Selection` (in progress)<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;College planner which promotes quick course selection

## <a name="Accessibility"></a>Accessibility

To access this application with administrator privileges use the following credentials:

- `e-mail`<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;admin@hotmail.com
- `password`<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;admin1

## <a name="Commitment"></a>Commitment

Time commitment for this application is flexible. Any free time available is allocated into this application.

## <a name="Learning-Queue"></a>Learning Queue

List of tasks to be completed either concurrently or nonconcurrently with development:

- <del>`Implement Heroku CLI for building and deploying application to Heroku server`</del>
- <del>`Implement cookies and sessions`</del>
- <del>`Learn and implement react`</del>
- <del>`Learn and implement redux`</del>
- <del>`Learn react routes for potential future use`</del>
- <del>`Implement (first) model, controller, integration and acceptance tests with RSpec and Capybara`</del>
- <del>`Investigate and implement a continuous integration tool to run tests when new build executes`</del>

## <a name="Questions-or-Concerns"></a>Questions or Concerns

If any questions or concerns arise, feel free to contact my e-mail at `tamkylet@sfu.ca`
