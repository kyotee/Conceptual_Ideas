# Conceptual Ideas

[![Build Status](https://travis-ci.org/tamkylet/Conceptual_Ideas-tamkylet.svg?branch=master)](https://travis-ci.org/tamkylet/Conceptual_Ideas-tamkylet)

Associated web based application serves as learning of various software libraries, frameworks, and other technologies with use of (and in addition to learning as well) Ruby on Rails. Intent for learning is related to personal interests. <b>Note that development targets application use with computers, tablets, and Samsung S8 phones using the Chrome Browser.</b>

## Application URL

https://conceptual-ideas.herokuapp.com/

## Table of Contents

- [Technologies](#Technologies)
- [APIs](#APIs)
- [Format](#Format)
- [Accessibility](#Accessibility)
- [Commitment](#Commitment)
- [Remarks](#Remarks)
- [Questions or Concerns](#Questions-or-Concerns)

## <a name="Technologies"></a>Technologies

Application currently utilizes the following methods and technologies:

- `Ruby on Rails`<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;web application framework
- `Travis CI`<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;continuous integration service that builds and executes RSpec/Capybara tests (every git push)
- `Heroku`<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;host server for application (must pass their build before every deployment)
- `Built-in debug Method from Ruby on Rails`<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;intuitive debugging information
- `Built-in params.require Method from Ruby on Rails`<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;only accept permitted input values
- `Bcrypt`<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;secure hashing and salting for sensitive information
- `SSL for Heroku (Deployment) Server`<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;encrypt packets of information
- `RSpec; Capybara; Factory Bot`<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;quality assurance
- `Selenium (browser based); Poltergeist (headless)`<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;web testing drivers
- `Media Queries`<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;responsive web design (ex mobile and tablet resolution support)
- `React; Babel; ES6; Redux; Webpack; Yarn`<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;JavaScript libraries with associated syntax and managers
- `Active Record (ORM); SQLite3 (development); PostgreSQL (production)`<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;database management

## <a name="APIs"></a>APIs

In addition, application currently utilizes the following APIs:
- `Rails Internationalization (I18n)`
- `Google Maps`
- `Write xlsx`

## <a name="Format"></a>Format

Each feature implemented into this application is documented:
https://drive.google.com/drive/folders/1FD1H089nWSV6atxVGSfrZEpWKHIAoZiN?usp=sharing

Here are the current features:

- `0 - Framework Setup and Integration`<br>
- `1 - User Management`<br>
- `2 - Image Differences Detection`<br>
- `3 - User Monitoring`<br>
- `4 - Real Time Messaging`<br>
- `5 - College Course Selection`<br>
- `6 - Data Mining`<br>

Here is the Kanban board to see progress on incompleted features, miscellaneous tasks, and bugs:
https://trello.com/b/cyxQAQQh/conceptual-ideas-progress

## <a name="Accessibility"></a>Accessibility

To access this application with administrator privileges use the following credentials:

- `e-mail`<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;admin@hotmail.com
- `password`<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;admin1

## <a name="Commitment"></a>Commitment

Time commitment for this application is intermittent. Any free time available is allocated into this application.

## <a name="Remarks"></a>Remarks

Travis CI does not include executing acceptance and integration tests:

- `Tests will fail during execution as application will be updating by Heroku host server`

Significant commits involved for troubleshooting and resolving problems:

- `Guarantee that primitive-types passed from controller to associated view will be received by React components upon view render`
- `Integrate Travis CI for automated test builds`
- `React and Redux deployable with Heroku`
- `Poltergeist for acceptance tests unable to detect react components as of 18/07/15 (requires more investigation in future; Selenium still works and associated tests removed from CI builds)`

## <a name="Questions-or-Concerns"></a>Questions or Concerns

If any questions or concerns arise, feel free to contact my e-mail at `tamkylet@sfu.ca`
