# PhilanthroTrees
**[The PhilanthroTrees Demo Site](https://philanthrotrees.herokuapp.com/)**
### Background and Overview
PhilanthroTrees is a volunteer task tracker that is inspired by Habitica. It is designed to encourage good service habits with a plant-based reward and punishment motivation system. Each user's progress is represented with a tree which is grown through completing tasks and gaining experience. To hold users accountable, plant health can be lost if tasks are not completed frequently enough, which might lead to a loss in progress and a withering plant. Users can also join a community to share tasks with their friends and enrich the volunteering experience.

### PHILANTHROTREES
| **Table of Contents**                       |
| ------------------------------------------- |
| **[Overview](#overview)**                   |
| **[Technologies](#technologies)**           |
| **[Features](#features)**                   |
| **[Upcoming Features](#upcoming-features)** |
| **[Code examples](#code-examples)**         |

### OVERVIEW

PhilanthroTrees is a Habitica inspired task tracker, designed to promote a sense volunteer activities citizens by growing plants with every new task completed and keeping a record of finished tasks to provide an extra sense of accomplishment to users.

PhilanthroTrees users can invite others to join their community, each completing tasks to grow the plants in their care and share their milestones, both tangible and virtual!

### Inspiration:
[Habitica](https://habitica.com/user/settings/site)

### Technologies and Technical Challenges:
PhilanthroTrees ia a mobile-first focus web app. Communities, Citizens and their volunteer statistics will be stored via the MongoDB cloud database API.

### TECHNOLOGIES
#### Backend:
- [MongoDB](https://www.mongodb.com/)
- [ExpressJS](http://expressjs.com/)
- [Node.js](https://nodejs.org/en/)
#### Frontend:
- [React](https://reactjs.org/)
- [Redux](https://redux.js.org/)
- [SCSS/SASS](https://sass-lang.com/documentation)
#### DETAILED EXPLANATION
##### REACT WITH REDUX
Allows for a smoother user experience on the client’s side when viewing various subelements
##### EXPRESS
With a framework centered in JavaScript, developers can more fluidly make adjustments to the web-service’s features and quickly attend to bugs.
##### MONGODB
Allows for rapid modular updating to specific Schema and provides an accessible model for JavaScript developers to design in, allowing for scalability of the web-service as well as the organization maintaining the production environment.

### FEATURES
#### Communities
- Community citizens can send invites to any user that is a PhilanthroTrees member with a valid email address.
- Once part of a community, users can view a shared project and task list.
#### Projects and Tasks
- Projects are displayed as a list on each user’s main page.
- Projects gain experience upon the submission of completed tasks by users.
- Tasks can be created within the Project Show feature.

  ![alt text][create]

[create]: frontend/public/assets/images/task_create.png "Task Create Form"

- Tasks can be submitted to give a user experience.

  ![alt text][TaskSubmit]

[TaskSubmit]: frontend/public/assets/images/task_submit.png "Task Submit Form"


#### User and Project Experience and Sprites
- User and project level are determined at render. The levels are then used to determine what sprite “level” needs to be rendered.

  ![alt text][ProjectShow]

[ProjectShow]: frontend/public/assets/images/philo_project_display.png "User and Project Cards"

- Users gain experience, leveling up at each new threshold and providing nourishment to their plant Avatar.

### UPCOMING FEATURES
- Multi-Community Access for users wishing to participate in other communities
- Ability to view the growth of other community citizen's avatars and projects
- More user Plant Avatars to choose from
- Projects will display highest contributing citizens
- Community Garden, displaying all the various projects and their current plant levels, as well as individual citizen stats
### CODE EXAMPLES
##### Sprite image determination and importing:
In the following code, we had to import an entire directory of subdirectories that contained all of the sprites for a particular plant. This was achieved through using webpack to import all of the png files into a single object within `sprite_pngs.js` which we then import into `sprite.js` where we were able to key into it using the desired plant type and level to render the exact plant sprite that we needed.  

An additional challenge here was fetching the highest level sprite that existed if the desired level for the sprite was above the maximum existing sprite level. This was a particularly challenging problem because the types of sprites varied in their available assets, so for different sprite types there could be between 13 and 24 available pngs. This challenge was overcome by using a for loop to decrement the level of the particular plant sprite until a matching image is found.
```javascript
// ./frontend/src/components/main/sprite/sprite.js
import React from 'react';
import sprites from './sprite_pngs';
import '../../../stylesheets/sprite.scss';

export default ({ level, type }) => {
  let sprite;
  for (let i = level; i > 0; i--){
    if (sprite) {
      break
    }
    let parsedLvl = String(i).padStart(2, '0');
    sprite = sprites[`./${type}/${type}_${parsedLvl}.png`];
  }

  return (
    <div className="sprite-container">
      <img
        className="sprite-img"
        src={ sprite }
        alt={ `${ type } sprite at level ${ level }` }
      />
    </div>
  );
}
// ./frontend/src/components/main/sprite/sprite_pngs.js
const sprites = {};
function importAll (r) {
  r.keys().forEach(key => sprites[key] = r(key));
}

importAll(require.context(`../../../images/sprites/`, true, /\.png$/));

export default sprites;
```
##### Forms using Formik
Throughout this project we made use of [Formik](https://jaredpalmer.com/formik/) to help streamline the form creation process and reduce the amount of boilerplate code. This allowed us to write the components for our forms very quickly and allowed us to spend more time focusing on the presentational aspects of our react components that were more unique.
For example, here is the form that we have to allow a user to create a new community: 
```javascript
import React from 'react';
import { createUserCommunity } from '../../../actions/community_actions';
import { useSelector, useDispatch } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';

export default (props) => {
  const currentUserId = useSelector(state => state.session.user.id);
  const dispatch = useDispatch();

  return (
    <React.Fragment>
      <Formik
        initialValues={{
          name: ''
        }}
        validate={ values => {
          let errors = {};
          if (!values.name) {
            errors.name = 'Required';
          } else if (
            !/^[A-Z0-9._%+-]/i.test(values.name)
          ) {
            errors.name = 'Invalid community name';
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          dispatch(createUserCommunity(currentUserId, values)).then(
            () => {
              setSubmitting(false);
            }
          );
        }}
        render={({ errors, status, touched, isSubmitting }) => (
          <Form>
            <Field type="name" name="name" />
            <ErrorMessage name="name" component="div" />
            <button type="submit" disabled={ isSubmitting }>
              Create new community
            </button>
          </Form>
        )}
      />
    </React.Fragment>
  );
}
```
In the above component, `Formik` allowed us to not only create a form without creating a class component, but also to handle validation of the community name within the form handling rather than delegating that task to the back-end model validation. This allows further flexibility for what we can validate, simplifies validation errors, and reduces the processing required by the server by allocating that processing to the user’s browser.

### Assets:
[Plant Sprites](https://assage.itch.io/growing-plants-pixel-pack-32x32)

