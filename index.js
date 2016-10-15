'use strict';
var Alexa = require('alexa-sdk');

var APP_ID = undefined; //OPTIONAL: replace with "amzn1.echo-sdk-ams.app.[your-unique-value-here]";
var SKILL_NAME = 'India Facts';

/**
 * Array containing space facts.
 */
var FACTS = [
    "India is the seventh-largest country by area.",
    "India is the second-most populous country.",
    "India is the most populous democracy in the world.",
    "The name India is derived from Indus, which originates from the Old Persian word Hindu.",
    "The geographical term Bharat (Bhārat, pronounced [ˈbʱaːrət̪] ( listen)), which is recognised by the Constitution of India as an official name for the country,[28] is used by many Indian languages in its variations. It is a modernisation of the historical name Bharatavarsha, which traditionally referred to the Indian subcontinent.",
    "Hindustan is a Persian name for India dating back to the 3rd century B.C.E. It was introduced into India by the Mughals and widely used since.",
    "India comprises the bulk of the Indian subcontinent, lying atop the Indian tectonic plate, and part of the Indo-Australian Plate.",
    "India's coastline measures 7,517 kilometres (4,700 mi) in length; of this distance, 5,423 kilometres (3,400 mi) belong to peninsular India and 2,094 kilometres (1,300 mi) to the Andaman, Nicobar, and Lakshadweep island chains.",
    "Major Himalayan-origin rivers that substantially flow through India include the Ganges and the Brahmaputra, both of which drain into the Bay of Bengal.",
    "The Indian climate is strongly influenced by the Himalayas and the Thar Desert, both of which drive the economically and culturally pivotal summer and winter monsoons.",
    "India's diverse economy encompasses traditional village farming, modern agriculture, handicrafts, a wide range of modern industries, and a multitude of services.",
    "The outlook for India's long-term growth is moderately positive due to a young population and corresponding low dependency ratio, healthy savings and investment rates, and increasing integration into the global economy.",
    "India's agricultural products include rice, wheat, oilseed, cotton, jute, tea, sugarcane, lentils, onions, potatoes; dairy products, sheep, goats, poultry, fish etc.",
    "India's industries include textiles, chemicals, food processing, steel, transportation equipment, cement, mining, petroleum, machinery, software, pharmaceuticals etc.",
    "India's commodities exports include petroleum products, precious stones, vehicles, machinery, iron and steel, chemicals, pharmaceutical products, cereals, apparel"
];

exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {
    'LaunchRequest': function () {
        this.emit('GetFact');
    },
    'GetNewFactIntent': function () {
        this.emit('GetFact');
    },
    'GetFact': function () {
        // Get a random space fact from the space facts list
        var factIndex = Math.floor(Math.random() * FACTS.length);
        var randomFact = FACTS[factIndex];

        // Create speech output
        var speechOutput = "Here's your India fact: " + randomFact;

        this.emit(':tellWithCard', speechOutput, SKILL_NAME, randomFact)
    },
    'AMAZON.HelpIntent': function () {
        var speechOutput = "You can say tell me an India fact, or, you can say exit... What can I help you with?";
        var reprompt = "What can I help you with?";
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', 'Goodbye!');
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', 'Goodbye!');
    }
};