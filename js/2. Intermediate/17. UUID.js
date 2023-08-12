
// UUID - Universally Unique Identifiers, sometimes say GUID - Globaly Unique Identifier

// =====================================================================================
/* what is a UUID?

   UUID is a string of 36 charcters
   Often used to identify pieces of data
   Highly likely to be globally unique  */

// -------------------------------------------------------------------------------------

// generating UUIDs

/* There are verious ways of generating UUID, we will use "UUID Versio 4" 
   
   Randomlly generated characters 
   The current "go to" UUID for most situations
   
   of we go through this link https://github.com/uuidjs/uuid#cdn-builds
   we will see the code that we need to use to generate UUID   */

<script type="module">
   import {v4 as uuidv4} from 'https://jspm.dev/uuid';
   console.log(uuidv4()); // ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'
</script>

/* to use it we need at first in the index.html in script tag add type="module"

      <script type="module"></script>

   and in the index.js file copy paste this line of code  */
import { v4 as uuidv4 } from 'https://jspm.dev/uuid';
// to generate a UUID we need to write uuidv4 in the code
console.log(uuidv4()); // ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'

// -------------------------------------------------------------------------------------

// example gnerating uuid

// at first we added type="moduel" in the scrypt tag in index.html

// then we impported v4 to index.js - now we can gnerate uuid
import { v4 as uuidv4 } from 'https://jspm.dev/uuid';

// we have cars array - each element has a uuid, we want to add a new element to this array
const cars = [
   {
      brand: 'Nissan',
      model: 'Leaf',
      price: 3000,
      uuid: '4fb2b6b7-c7ee-4c80-8de1-390e89f43d7f'
   },
   {
      brand: 'Toyota',
      model: 'Prius',
      price: 6000,
      uuid: '82a13f62-d239-46a2-a94f-020189338e1a'
   },
]

// we add a new element to the cars array, and we generate a uuid for this element
cars.push({
   brand: 'Tesla',
   model: 'Model S',
   price: '🤦‍♂️',
   // and we generate a uuid for this element
   uuid: uuidv4()
})

console.log(cars)
// =====================================================================================