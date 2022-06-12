# ASSESSMENT 5: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is a hash in Ruby?

  Your answer: Hashes in ruby are collections of key value pairs. The syntax of hashes are as follows `{ key_1: 'Value1', key_2: 'value2' }.` They also have an older syntax called Hash rockets which are written like `{:key_1 => 'value1'}. 

  Researched answer: Hashes are a data structure that contain collections of key value pairs. You can add new values into the hash whenever you want by `hash_name[:key] = 'value'`, say you want to create a dictionary, you would want to use a hash so you can add new keys with attached values that are able to be easily found when searching for them, you would also want the option to just add new keys and values to your hash. There are two main ways to write hashes, the older way that still works are hash rockets, a newer syntax would be using key: value.



2. What is a gem?

  Your answer: A gem is a package that you can install into your ruby files. One of the gems we've used is called RSpec and we use it for testing. When we create a new ruby on rails app it installs up a bunch of different gems into our app.

  Researched answer: Ruby gems are packages containing libraries and/or applications. You can create your own gems and publish them as well! Gems all have a similar code structure, a lib folder for the code, a test folder for your testing, a rakefile which is read by the rake software(used for task management and automation i.e. automated testing), a bin folder, a readme, and the gemspec(info on your gem).



3. What is Ruby on Rails?

  Your answer: Ruby on Rails, commonly refered to as just Rails is a framework built in the ruby language, it contains a lot of gems and allows for faster creation of full stack apps. The creator of Rails had a quote that stuck with me "Look at all the things I'm not doing" and this helps me remember that Rails has its own specific ways that it does stuff and it doesn't want to be interfered with! We use Ruby on Rails for the backend and as a way to include CRUD functions into our full stack app.

  Researched answer: Ruby on Rails also known as Rails is a server-side web app framework built in the ruby language. It is a collection of gems designed to work together in their own way so you can create full stack apps faster. Rails happens to be a MVC(Model View Controller) framework. Which means it handles lots of data related to databases and storing the user data. If you have a web app that looks pretty and has user interaction that's great, but can you store those users data? You don't want it all to go to waste everytime you reload the page, you want to store it! You can do that inside of databases managed by Rails. 



4. What is a relational database? Are there other kinds of databases?

  Your answer: A relational database is an organized table with columns, each column has a header that descibes what data will be inside of it. Relational databases also have rows or instances of data. They are a great way of storing specific data in a way that can be easily interpreted by both human and computer software. Another type of database is a non-relational database, which is kind of a nightmare. It contains all the same data just unorganized and thrown out there into a space. I like to remember it as the difference between a google doc vs a google sheet. 

  Researched answer: A relational database contains SQL and is managed by a relational database management system, such as PostgreSQL. It is a bunch of stored data with predefined structures that gets filled out based on the input it takes in. Keeping the data organized and easy to access(Primary keys help a lot with this). There are lots of different databases, to name a few we have: Centralized databases(Operates in a single location), End-user databases(Primarily used by a single person), NoSQL databases(Non-relational data with lack of structure and focus on speed), and many more.



5. What are primary keys? Why are they important?

  Your answer: Primary keys are keys that are assigned to instances of data inside a relational database. They are created with your data and are always unique specifically to that instance. Primary keys can be called on to represent that entire bundle of data. Never touch/modify your primary keys! Even if you delete a row of data its primary key will never be used again.

  Researched answer: Primary keys uniquely define individual sets of data. You can not redefine primary keys even if the data assigned to it is deleted. They are usually stored as ID: and its number. Relational databases wouldn't work if we did not have primary keys, since each set of data needs to be seen uniquely even if it is a duplicate. We can refer to the primary key to find its attached data. 



## Looking Ahead: Terms for Next Week
Research and define the following terms to the best of your ability.

1. RESTful routes: The REST in RESTful stands for Representation State Transfer. Routes are the request by our machine and response from the server. RESTful routes combine our routes with the CRUD functions(Create, Read, Update, Delete). There are 7 different RESTful routes, each have an associated HTTP verb: Index(GET), New(GET), Create(POST), Show(GET), Edit(GET), Update(PUT), Destroy(DELETE). 

2. JSON: A readable file type that allows us to store and manipulate data entered in the same syntax as javascript objects. 

3. ERB: Embedded Ruby(default view rendering engine for Rails), created with the file extension .erb. Everything inside is HTML until you break into ruby with this tag <%= %>. The equal sign tells erb what you want to render so you don't use it with every tag. Both ERB and JSX allow you to write different languages inside HTML 

4. Params: Params are values that are obtained from GET requests. The values can also be taken part of the URL stored in certain routes 

5. API: Application programming interface, They offer data to other parts of your code. There are four main types of API's: Public, Partner, Internal a.k.a. Private, and composite API's
