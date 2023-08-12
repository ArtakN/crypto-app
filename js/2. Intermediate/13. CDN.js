
/*
   CDNs
      add icons
      generate UUIDs
*/

// ===========================================================================================================
// CDN - Content Delevery Network

/* CDN (Content Delivery Network) - это глобальная сеть серверов, расположенных в разных частях мира,
   которые используются для ускорения и оптимизации доставки статических файлов, таких как изображения,
   видео, стили, скрипты и т.д.

   Когда вы используете CDN, вы загружаете статические файлы с ближайшего к вам сервера CDN, который
   имеет копию этих файлов.Это позволяет уменьшить время загрузки, улучшить производительность сайта
   и снизить нагрузку на основной сервер, где размещен сайт.

   CDN используется не только для ускорения загрузки статических файлов, но и для обеспечения более
   высокой доступности, устойчивости к отказам и защиты от DDoS - атак.

   Веб - разработчики часто используют CDN для загрузки популярных библиотек и фреймворков, таких как
   jQuery, Bootstrap, React и т.д.Это может значительно сократить время загрузки сайта и улучшить
   пользовательский опыт.

   what is a CDN?

      1. a remote service
      2. provide assets to web aplication
      3. e.g. functions, styles, icons...
      4. gives us a snippet of code that will bring
         the asset into our aplication  */

// we are going to use the Font Awsome SDN - icons to add awesomeness to our site

// we can do it in the sites like cdnjs.com

/* at first we need to add it to the html

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css"
integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A=="
crossorigin="anonymous" referrerpolicy="no-referrer" />  */

/* now we can fined some icons, to find icons we need to fo to
   https://fontawesome.com/ page the look for it in the search page
   when we fined the necessary icon we click on it and copy the html i tag with some classes in it
   then we copy the tag and paste it in the html, where we need to put the icon  */
// =========================================================================================================

// =========================================================================================================
// As we know every object in the data has it's own  uuid - unic identifier

/* for example we have a tweet with 3 icons - like, comment, retweet.
   and we want that by clicking on these icons these we could like it, write a comment and reteet.
   There are 2 ways to do it.
      1. we need to add event listeners on each of these icons. this is not comfortable
         because we need 3 event listners. and if we have many tweets, this means we
         will have thousends event listeners.
      2. we can five an id to each of these icons wich is the same is the tweet uuid
         and then id listener will detect the id of the icon that was cliced.
         here we will have one event listener, which will detect which type of icon was
         clicked and which tweet that icon belongs to.  */
// =========================================================================================================