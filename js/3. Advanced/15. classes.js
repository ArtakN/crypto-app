// We created a new class called Module
class Module {
   // Inside the body of the class, set up a constructor method - this is a function
   constructor() {
      /***************************************************************
         Properties of the classes live in constructor method
         *************************************************************
         Inside the constructor method, set up courseName("Learn JS"),
         studentsEnrollded(5600) and studentsCompleted(5100) as
         properties on "this".   */
      this.courseName = "Learn JS"
      this.studentsEnrolled = 5600
      this.studentsCompleted = 5100
   }
}

// Create a new instance of Module called learnJs
const learnJs = new Module
// log out one of the properties
console.log(learnJs.studentsEnrolled)
// -> 5600

// ---------------------------------------------------------------------------------

// constructor method gets parameters

/*
Challenge
1. Create a new class called AdvertisingChannel.
2. Inside the body of the class, set up a constructor method that 
   takes data as a parameter.
3. Inside the constructor method, set up name, adViews, adClicks 
   and conversion properties on "this".     
*/
const adData = {
   facebook: {
      site: 'Facebook',
      adViews: 23400,
      clicks: 210,
      conversions: 5,
   },
   twitter: {
      site: 'Twitter',
      adViews: 23400,
      clicks: 192,
      conversions: 9,
   },
   instagram: {
      site: 'Instagram',
      adViews: 23400,
      clicks: 200,
      conversions: 2,
   }
}

class AdvertisingChannel {
   constructor(data) {
      // this.site = data.site
      // this.adViews = data.adViews
      // this.clicks = data.clicks
      // this.conversions = data.conversions
      Object.assign(this, data)
      this.conversionRate = (this.conversions / this.clicks * 100)
   }
   getAdvertisingChannelHtml() {
      const { site, adViews, clicks, conversions, conversionRate } = this
      return `
          <div class="site-name"> ${site} </div>
          <div>Views: ${adViews} </div>
          <div>Clicks: ${clicks} </div>
          <div>Conversions: ${conversions} </div>
          <div>Conv. Rate: <span class="highlight"> ${conversionRate.toFixed(1)} %</span></div> 
      `
   }
}

const facebook = new AdvertisingChannel(adData.facebook)
const twitter = new AdvertisingChannel(adData.twitter)
const instagram = new AdvertisingChannel(adData.instagram)

document.getElementById('fb').innerHTML = facebook.getAdvertisingChannelHtml()
document.getElementById('twit').innerHTML = twitter.getAdvertisingChannelHtml()
document.getElementById('insta').innerHTML = instagram.getAdvertisingChannelHtml()
/*
Challenge
1. Set up a property called conversionRate to hold the percentage of 
   clicks that resulted in someone subscribing. Set conversionRate 
   equals to conversions/clicks * 100.
2. Create a method called getAdvertisingChannelHtml wich returns HTML 
   using the template string provided.
3. Set up an instance of AdvertisingChannel for each channel and make 
   them render their html to the page. I have grabbed the divs for
   you!

Warning: the conversion rate might be very long! Figure out how to display 
it to 1 decimal place - feel free to use Google.

Html string:
    <div class="site-name"> **change this** </div>
    <div>Views: **change this** </div>
    <div>Clicks: **change this** </div>
    <div>Conversions: **change this** </div>
    <div>Conv. Rate: <span class="highlight"> **change this** %</span></div>   
*/