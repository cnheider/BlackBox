# BlackBox

Danske Bank BlackBox algorithmic trading challenge

Hi and welcome to the BlackBox challenge.

Two sample projects are provided one showing Java another showing a Scala implementation to get you started. However nothing stopping you from using other languages such as JRuby or Clojure. The only requirement is that you need to deliver the .class files implementing required interface.

The interface you need to implement is provided in the lib folder of sample projects. It contains one interface and one enum definition.

You need to implement the interface, which is how your algorithm is able to communicate with our trading engine. You will receive unknown number of price ticks in a sequence, and based on that you will per price tick have to decide one of 3 actions. Buy, Sell or Hold.

JUnit tests have been provided to make basic testing possible before deploying your solution.

In regards to deployment, you should send the structure classic java structure of class and directories. For the sample projects, that means everything below "bin" folder, and put it in a folder name something unique for instance your strategy name.

