import { Template } from 'meteor/templating'
import './body.html'

Template.body.helpers(
    {
        tasks: [
            { text: "1" },
            { text: "2" },
            { text: "3" }
        ]
    }
);