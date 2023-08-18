/* query strings - a way to filter results

   for example from bicycle shop server we get all bicycles, but we want to
   filter and see a list of all mountain bicycles.

      /bikes?type=mountain

   for more than one filter we use &: we want to get a list of mountain bicycles
   with track brand.

      /bikes?type=mountain&brand=trek
   
   usually the computer will translate query the string into an object 

      {
         type: "mountain",
         brand: "trek"
      }

--------------------------------------------------------------------------------

At Mike's Bikes, they also sell bike racks (endpoint is /bikeracks).

What would you expect the endpoints to be for the following tasks:

1. Get a list of all bike racks sold on the site?
   /bikeracks

2. Get a list of all bike racks available in the physical store right now?
   (Assume a query called "available" that is a boolean true/false)
   /bikeracks?available=true  ==> {available: "true"} (Will be parsed as a string)

3. Get a list of all "Thule"-brand bike racks that can hold 4 bikes?
   (Assume there are "brand" and "numBikes" queries)
   /bikeracks?brand=thule&numBikes=4                              */