# Kaltura Node-JS Template
All the necessary components, and some nice-to-haves to get a node.js app running with the Kaltura  API.

# Summary
 This project is a proof of concept to show you how to programmatically use a recording created from a Kaltura Meeting. The meeting can be run in an ad-hoc, on the fly manner and a recording of the meeting will be available for playback.

# How to Run
1. Copy env.template to .env and fill in your information
2. run npm install
3. npm run dev for developement
4. npm start for production

# Documentation

This project consists of two components: 

1. Starting a Kaltura meeting and recording it
2. Finding the recording and playing it back

To start a meeting, the code from [kaltura-nodejs-template](https://github.com/kaltura-vpaas/kaltura-nodejs-template)  was copied into this project, and you can refer to [Kaltura Meetings Integration Guide](https://github.com/kaltura-vpaas/virtual-meeting-rooms ) for a comprehensive guide to the Meetings API. 

First a form is created to gather all necessary information to start a live meeting. The example use-case would be a student that wants to ask a question to a teacher, so a field for question is provided in 

![meetingform](readme-assets/meetingform.png)



# How you can help (guidelines for contributors) 

Thank you for helping Kaltura grow! If you'd like to contribute please follow these steps:
* Use the repository issues tracker to report bugs or feature requests
* Read [Contributing Code to the Kaltura Platform](https://github.com/kaltura/platform-install-packages/blob/master/doc/Contributing-to-the-Kaltura-Platform.md)
* Sign the [Kaltura Contributor License Agreement](https://agentcontribs.kaltura.org/)

# Where to get help
* Join the [Kaltura Community Forums](https://forum.kaltura.org/) to ask questions or start discussions
* Read the [Code of conduct](https://forum.kaltura.org/faq) and be patient and respectful

# Get in touch
You can learn more about Kaltura and start a free trial at: http://corp.kaltura.com    
Contact us via Twitter [@Kaltura](https://twitter.com/Kaltura) or email: community@kaltura.com  
We'd love to hear from you!

# License and Copyright Information
All code in this project is released under the [AGPLv3 license](http://www.gnu.org/licenses/agpl-3.0.html) unless a different license for a particular library is specified in the applicable library path.   

Copyright © Kaltura Inc. All rights reserved.   
Authors and contributors: See [GitHub contributors list](https://github.com/kaltura/YOURREPONAME/graphs/contributors).  

### Open Source Libraries Used