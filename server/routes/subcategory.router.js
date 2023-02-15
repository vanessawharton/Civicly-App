const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
    rejectUnauthenticated,
} = require('../modules/authentication-middleware');

/**
 * GET subcategory route
 */
router.get('/', rejectUnauthenticated, (req, res) => {
    const queryText = `
    SELECT * FROM "Subcategories"
    `;
    pool
      .query(queryText)
      .then(result => {
        const subcategories = result.rows
        const returnSubcategories = subcategories.map(element => {
          switch (element.category) {
            case 0:
              return {...element, categoryName: 'Accessibility'}
            case 1:
              return {...element, categoryName: 'Animal Control'}
            case 2:
              return {...element, categoryName: 'Biking'}
            case 3:
              return {...element, categoryName: 'Garbage and Recycling'}
            case 4:
              return {...element, categoryName: 'Graffiti'}
            case 5:
              return {...element, categoryName: 'Health and Environmental'}
            case 6:
              return {...element, categoryName: 'Parking'}
            case 7:
              return {...element, categoryName: 'Property'}
            case 8:
              return {...element, categoryName: 'Sidewalks and Streets'}                                                                        
            default:
              return {...element};
          }

        });
        res.send(returnSubcategories)
      })
      .catch(err => {
        console.log('Error making get request for chores', err);
        res.sendStatus(500);
      })

});

module.exports = router;