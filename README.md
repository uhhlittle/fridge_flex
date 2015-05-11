# fridge_flex

Fridge Flex

For my third project for WDI I intend to build a personal fridge app that allows a user to save recipes that call for the ingredients in their fridge.
Based on the recipes saved for the user, the app will also generate a grocery list with ingredients for each recipe, minus the ingredients not in the fridge. 


BRONZE (MVP)
	Basic Rails app with full crud functionality, and some javascript, that uses data from an api (AJAX request)
<!-- Remember, your API can be an internal API. That is, you can write your front end app separately to consume a Rails API -->

User can create login, edit profile to include name, location, etc

User can add ingredients to fridge.

User can remove ingredients from the fridge

User can see current list of ingredients in fridge 

User can select ingredients from the fridge and return an api search
<!-- what does it mean for a user to return an api search? -->
User can favorite recipes from api return.
<!-- again, what does this mean? -->
User can view profile page to see favorite recipes and current grocery list

User can remove favorites from their profile page 
<!-- how is a favorite a feature? what does it do? -->
SILVER 
	Rails functionality with jQuery OOP and full styling. Also ingredients can be dragged onto counter (spec testing for limit to 4 ingredients)
	<!-- I'd prefer to see a further descoped project, with the bronze level incorporating some testing and OO design. silver and gold could add more ambitious features. But you know best what you want to get out of this project, so proceed how you see fit. -->

GOLD 
	Beautifully styled app that interacts with online food database, has animation, (door opens) full OOP. 
