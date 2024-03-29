window.Smallchat = { config: { "slackTeamId": "TD115RF4G", "scChannelId": "-LokZbBUCYUH-S3K5GLv", "slackChannelId": "GNBUZLM44", "uid": "-LokZRI_gHD7GhYhbMbH", "planId": "05", "accountCreated": 1568477922655 }, appearance: { "brand_color": "#2C2C46", "contact_dismissible": false, "contact_enabled": true, "contact_field_label": "Email", "contact_immediately": false, "contact_prompt": "Add your name and email to make sure you see our reply:", "contact_reply": "Thanks {{name}}! You'll get a response here or we'll contact you at {{contact}}.", "custom_css": "img{opacity:0}\n.PoweredBy{display:none;}", "hide_logo": false, "hide_team_icon": true, "launcher_pos": "right", "launcher_prompt": "Send a message", "launcher_type": "icon", "messenger_blank": "Send a message, and we’ll reply as soon as we can.", "messenger_entry": "Send a message...", "messenger_prompt": "How can we help you?", "name_field_label": "Name", "offline_greeting": "We’re offline right now but typically respond in about an hr.", "submit_label": "Done", "text_color": "#FFFFFF" }, behavior: { "avatar_config": 0, "operating_hours": false, "timezone": "Asia/Jakarta" }, };
window.addEventListener('load', function () {
  var styles = document.createElement('link'); styles.rel = 'stylesheet'; styles.href = 'https://static.small.chat/messenger.css'; document.head.appendChild(styles);
  var script = document.createElement('script'); script.async = true; script.src = 'https://static.small.chat/messenger.js'; document.body.appendChild(script);
}, false);

window.addEventListener("smallchat:ready", function () {
  // Smallchat.on("messages:changed", e => console.log(e));
  // Smallchat.set("name",  example.user.name)
  // Smallchat.set("email",  example.user.email)
  // Smallchat.set("url",  '')
  // Smallchat.set("custom",  '')

  window.addEventListener("beforeunload", function (e) {
    if ("offline" !== Smallchat.get('status')) {
      Smallchat.set("status", "offline")
    }

    // (e || window.event).returnValue = null;
    // return null;
  });
});
