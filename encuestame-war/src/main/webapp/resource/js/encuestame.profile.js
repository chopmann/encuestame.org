dependencies ={
    layers:  [
        {
            name: "encuestame-commons.js",
            //copyrightFile: "../../encuestame-war/apache.txt",
            dependencies: [
                "encuestame.org.core.commons.tweetPoll.TweetPoll",
                "encuestame.org.core.commons.tweetPoll.TweetPollList",
                "encuestame.org.core.commons.tweetPoll.TweetPollListDetail",
                "encuestame.org.core.commons.tweetPoll.HashTags",
                "encuestame.org.core.commons.tweetPoll.Answers",
                "encuestame.org.core.commons.poll.Poll",
                "encuestame.org.core.commons.social.SocialAccounts",
                "encuestame.org.core.commons.dashboard.Dashboard",
                "encuestame.org.core.commons.dashboard.chart.DashboardPie",
                "encuestame.org.core.commons.dashboard.chart.DashboardLine",
                "encuestame.org.core.commons.dashboard.chart.DashboardColumn2D",
                "encuestame.org.core.commons.notifications.Notification",
                "encuestame.org.core.commons.notifications.NotificationList",
                "encuestame.org.core.admon.project.Projects",
                "encuestame.org.core.admon.user.Users",
                "encuestame.org.core.commons.dashboard.chart.EncuestamePieChart",
                "encuestame.org.core.shared.utils.YesNoWidget",
                "encuestame.org.core.map.Map",
                "encuestame.org.core.commons.profile.ProfileMenu",
                "encuestame.org.core.commons.profile.Profile",
                "encuestame.org.core.commons.dashboard.DashBoardMenu",
                "encuestame.org.core.commons.security.Password",
                "encuestame.org.core.admon.location.Locations",
                "encuestame.org.core.commons.error.ErrorSessionHandler",
                "encuestame.org.core.commons.error.ErrorConexionHandler",
                "encuestame.org.core.commons.error.ErrorHandler",
                "encuestame.org.core.commons.dialog.Confirm",
                "encuestame.org.core.commons.dialog.Dialog",
                "encuestame.org.core.commons.signup.SignupProfile",
                "encuestame.org.core.commons.security.Login",
                "encuestame.org.core.shared.utils.Suggest",
                "encuestame.org.core.shared.utils.Table",
                "encuestame.org.core.commons.error.AbstractErrorHandler",
                "encuestame.org.core.commons",
                "encuestame.org.core.commons.search.SearchMenu",
                "encuestame.org.core.commons.search.SearchSuggestItem",
                "encuestame.org.activity.Activity",
                "encuestame.org.core.commons.hashtags.Cloud",
                "encuestame.org.core.commons.rated.Comments",
                "encuestame.org.core.commons.rated.Users",
                "encuestame.org.core.commons.stream.FrontEnd",
                "encuestame.org.core.commons.stream.HashTagInfo",
                "encuestame.org.core.commons.stream.FrontEndItem",
                "encuestame.org.core.commons.rated.HashTags",
                "encuestame.org.mobile.notifications.NotificationList",
                "org.cometd",
                "org.cometd.AckExtension",
                "org.cometd.ReloadExtension",
                "org.cometd.TimeStampExtension",
                "org.cometd.TimeSyncExtension"
                ]
            }
          /*,
            {
                name: "../dijit/dijit.js",
                dependencies: [
                    "dijit.dijit"
                ]
            },
            {
                name: "../dijit/dijit-all.js",
                layerDependencies: [
                    "../dijit/dijit.js"
                ],
                dependencies: [
                    "dijit.dijit-all"
                ]
            }*/
        ],
        prefixes: [
            ["encuestame", "../../encuestame-war/src/main/webapp/resource/js/encuestame"],
            ["dijit", "../dijit" ],
            ["dojox", "../dojox" ],
            ["org", "../../encuestame-war/src/main/webapp/resource/js/org" ]
        ]
    };
