var questions = [
  // Easy Questions (8: 5 Phishing, 3 Legitimate)
  {
    type: 'email',
    difficulty: 'Easy',
    sender: 'Apple Support <support@applee-id.com>',
    subject: 'Your Apple ID Has Been Locked!',
    body: '<div class="header" style="background-color: #f5f5f5; padding: 10px; text-align: center;"><img src="https://i.imgur.com/8Zf5Y2Z.png" alt="Apple Logo" style="height: 30px;"></div><p>Dear Customer,<br>Your Apple ID has been locked due to suspicious activity. Please verify your identity by clicking <a href="http://applee-id.com/verify" onmouseover="showURL(\'http://applee-id.com/verify\')" onmouseout="hideURL()">here</a> within 24 hours.<br>Thank you,<br>Apple Team</p>',
    isPhishing: true,
    feedback: 'The sender’s domain "applee-id.com" has an extra "e" and is not the official "apple.com". Urgent requests to verify accounts via links are common phishing tactics.'
  },
  {
    type: 'sms',
    difficulty: 'Easy',
    sender: 'BPI Alert',
    subject: 'Account Security Warning',
    body: '[BPI] Your account is at risk! Secure it now at <a href="http://bpi-security.com/verify" onmouseover="showURL(\'http://bpi-security.com/verify\')" onmouseout="hideURL()">bpi-security.com/verify</a>.',
    isPhishing: true,
    feedback: 'The domain "bpi-security.com" is not BPI’s official "bpi.com.ph". Banks don’t send SMS with links to secure accounts.'
  },
  {
    type: 'email',
    difficulty: 'Easy',
    sender: 'Spotify Support <support@spotify.com>',
    subject: 'Your Subscription Receipt',
    body: '<div class="header" style="background-color: #1DB954; padding: 10px; text-align: center;"><img src="https://i.imgur.com/7k5qJ2X.png" alt="Spotify Logo" style="height: 30px;"></div><p>Dear Member,<br>Your Spotify Premium subscription has been renewed. Next billing: May 20, 2025. View details <a href="https://www.spotify.com/account" onmouseover="showURL(\'https://www.spotify.com/account\')" onmouseout="hideURL()">here</a>.<br>Enjoy your music!<br>Spotify Team</p>',
    isPhishing: false,
    feedback: 'The sender’s domain is "spotify.com", and the link points to the official Spotify website. The message lacks urgent or suspicious requests.'
  },
  {
    type: 'sms',
    difficulty: 'Easy',
    sender: 'Shopee PH',
    subject: 'Order Confirmation',
    body: '[Shopee] Your order #123456 will arrive by May 15, 2025. Track it at <a href="https://shopee.ph/track" onmouseover="showURL(\'https://shopee.ph/track\')" onmouseout="hideURL()">shopee.ph/track</a>.',
    isPhishing: false,
    feedback: 'The domain "shopee.ph" is official, and the message provides specific order details without urgent requests.'
  },
  {
    type: 'email',
    difficulty: 'Easy',
    sender: 'Microsoft Support <support@micr0soft.com>',
    subject: 'Urgent: Account Verification Required',
    body: '<div class="header" style="background-color: #0078D4; padding: 10px; text-align: center;"><img src="https://i.imgur.com/9p2x3kQ.png" alt="Microsoft Logo" style="height: 30px;"></div><p>Dear User,<br>Your Microsoft account needs verification. Click <a href="http://micr0soft.com/verify" onmouseover="showURL(\'http://micr0soft.com/verify\')" onmouseout="hideURL()">here</a> to avoid suspension.<br>Microsoft Team</p>',
    isPhishing: true,
    feedback: 'The domain "micr0soft.com" uses a zero instead of an "o", unlike the official "microsoft.com".'
  },
  {
    type: 'sms',
    difficulty: 'Easy',
    sender: 'Lazada Alert',
    subject: 'Account Issue',
    body: '[Lazada] Your account has an issue! Fix it at <a href="http://lazadaa.ph/fix" onmouseover="showURL(\'http://lazadaa.ph/fix\')" onmouseout="hideURL()">lazadaa.ph/fix</a>.',
    isPhishing: true,
    feedback: 'The domain "lazadaa.ph" has an extra "a" and is not the official "lazada.com.ph".'
  },
  {
    type: 'email',
    difficulty: 'Easy',
    sender: 'Google Support <support@google.com>',
    subject: 'Your Google Drive Storage Update',
    body: '<div class="header" style="background-color: #ffffff; padding: 10px; text-align: center; border-bottom: 1px solid #e0e0e0;"><img src="https://i.imgur.com/5n8k2jY.png" alt="Google Logo" style="height: 30px;"></div><p>Dear User,<br>Your Google Drive storage plan has been updated. View details <a href="https://drive.google.com/settings" onmouseover="showURL(\'https://drive.google.com/settings\')" onmouseout="hideURL()">here</a>.<br>Google Team</p>',
    isPhishing: false,
    feedback: 'The sender’s domain is "google.com", and the link points to the official Google Drive settings page.'
  },
  {
    type: 'sms',
    difficulty: 'Easy',
    sender: 'PayMaya',
    subject: 'Account Issue',
    body: '[PayMaya] Your account has an issue! Fix it at <a href="http://paymayaa.com/fix" onmouseover="showURL(\'http://paymayaa.com/fix\')" onmouseout="hideURL()">paymayaa.com/fix</a>.',
    isPhishing: true,
    feedback: 'The domain "paymayaa.com" has an extra "a" and is not the official "paymaya.com".'
  },
  // Medium Questions (14: 9 Phishing, 5 Legitimate)
  {
    type: 'email',
    difficulty: 'Medium',
    sender: 'BDO Online Banking <onlinebanking@bdo.com.ph>',
    subject: 'Update Your Account Details',
    body: '<div class="header" style="background-color: #003087; padding: 10px; text-align: center;"><img src="https://i.imgur.com/4k6y2pX.png" alt="BDO Logo" style="height: 30px;"></div><p>Dear Client,<br>We’ve updated our security policies. Update your details <a href="http://bdo-online.ph/update" onmouseover="showURL(\'http://bdo-online.ph/update\')" onmouseout="hideURL()">here</a> within 48 hours to avoid restrictions.<br>BDO Team</p>',
    isPhishing: true,
    feedback: 'The sender’s domain "bdo.com.ph" is legitimate, but the link points to "bdo-online.ph", a fake domain. Always verify URLs.'
  },
  {
    type: 'sms',
    difficulty: 'Medium',
    sender: 'GCash Support',
    subject: 'Claim Your Cashback',
    body: '[GCash] You’ve earned P500 cashback! Claim it at <a href="http://gcash-promo.co/claim" onmouseover="showURL(\'http://gcash-promo.co/claim\')" onmouseout="hideURL()">gcash-promo.co/claim</a>.',
    isPhishing: true,
    feedback: 'The domain "gcash-promo.co" is not GCash’s official "gcash.com". Unsolicited cashback offers are common phishing tactics.'
  },
  {
    type: 'email',
    difficulty: 'Medium',
    sender: 'Amazon Support <support@amazon.com>',
    subject: 'Order #789012 Shipped',
    body: '<div class="header" style="background-color: #232F3E; padding: 10px; text-align: center;"><img src="https://i.imgur.com/3p7x4qZ.png" alt="Amazon Logo" style="height: 30px;"></div><p>Dear Customer,<br>Your order #789012 has shipped and will arrive by May 18, 2025. Track it <a href="https://www.amazon.com/orders" onmouseover="showURL(\'https://www.amazon.com/orders\')" onmouseout="hideURL()">here</a>.<br>Amazon Team</p>',
    isPhishing: false,
    feedback: 'The sender’s domain is "amazon.com", and the link points to the official Amazon orders page.'
  },
  {
    type: 'sms',
    difficulty: 'Medium',
    sender: 'Globe Telecom',
    subject: 'Payment Reminder',
    body: '[Globe] Your bill of P1200 is due May 15, 2025. Pay now at <a href="https://www.globe.com.ph/pay" onmouseover="showURL(\'https://www.globe.com.ph/pay\')" onmouseout="hideURL()">globe.com.ph/pay</a>.',
    isPhishing: false,
    feedback: 'The domain "globe.com.ph" is official, and the message provides specific bill details.'
  },
  {
    type: 'email',
    difficulty: 'Medium',
    sender: 'PayPal Support <support@paypal.com>',
    subject: 'Action Required: Verify Payment',
    body: '<div class="header" style="background-color: #003087; padding: 10px; text-align: center;"><img src="https://i.imgur.com/6m8k9pZ.png" alt="PayPal Logo" style="height: 30px;"></div><p>Dear User,<br>A recent payment needs verification. Confirm it <a href="http://paypal-verify.com/confirm" onmouseover="showURL(\'http://paypal-verify.com/confirm\')" onmouseout="hideURL()">here</a> within 24 hours.<br>PayPal Team</p>',
    isPhishing: true,
    feedback: 'The link points to "paypal-verify.com", not the official "paypal.com". Verify payments directly on PayPal’s website.'
  },
  {
    type: 'sms',
    difficulty: 'Medium',
    sender: 'Shopee PH',
    subject: 'Exclusive Voucher',
    body: '[Shopee] Get P200 off your next purchase! Claim at <a href="http://shopee-voucher.ph/claim" onmouseover="showURL(\'http://shopee-voucher.ph/claim\')" onmouseout="hideURL()">shopee-voucher.ph/claim</a>.',
    isPhishing: true,
    feedback: 'The domain "shopee-voucher.ph" is not Shopee’s official "shopee.ph". Verify vouchers in the Shopee app.'
  },
  {
    type: 'email',
    difficulty: 'Medium',
    sender: 'Netflix Support <support@netflix.com>',
    subject: 'Your Account Settings',
    body: '<div class="header" style="background-color: #E50914; padding: 10px; text-align: center;"><img src="https://i.imgur.com/2k7p9qZ.png" alt="Netflix Logo" style="height: 30px;"></div><p>Dear Member,<br>Your Netflix account settings were updated on May 12, 2025. Review them <a href="https://www.netflix.com/account" onmouseover="showURL(\'https://www.netflix.com/account\')" onmouseout="hideURL()">here</a>.<br>Netflix Team</p>',
    isPhishing: false,
    feedback: 'The sender’s domain is "netflix.com", and the link points to the official Netflix account page.'
  },
  {
    type: 'sms',
    difficulty: 'Medium',
    sender: 'BPI Security',
    subject: 'Card Alert',
    body: '[BPI] Suspicious transaction detected. Verify it at <a href="http://bpi-secure.ph/verify" onmouseover="showURL(\'http://bpi-secure.ph/verify\')" onmouseout="hideURL()">bpi-secure.ph/verify</a>.',
    isPhishing: true,
    feedback: 'The domain "bpi-secure.ph" is not BPI’s official "bpi.com.ph". Contact BPI directly.'
  },
  {
    type: 'email',
    difficulty: 'Medium',
    sender: 'LinkedIn Support <support@linkedin.com>',
    subject: 'Connection Request',
    body: '<div class="header" style="background-color: #0077B5; padding: 10px; text-align: center;"><img src="https://i.imgur.com/8p9k3qZ.png" alt="LinkedIn Logo" style="height: 30px;"></div><p>Dear User,<br>You have a new connection request. View it <a href="https://www.linkedin.com/notifications" onmouseover="showURL(\'https://www.linkedin.com/notifications\')" onmouseout="hideURL()">here</a>.<br>LinkedIn Team</p>',
    isPhishing: false,
    feedback: 'The sender’s domain is "linkedin.com", and the link points to the official LinkedIn notifications page.'
  },
  {
    type: 'sms',
    difficulty: 'Medium',
    sender: 'Lazada PH',
    subject: 'Flash Sale Alert',
    body: '[Lazada] Flash sale starts now! Shop at <a href="http://lazada-sale.ph/shop" onmouseover="showURL(\'http://lazada-sale.ph/shop\')" onmouseout="hideURL()">lazada-sale.ph/shop</a>.',
    isPhishing: true,
    feedback: 'The domain "lazada-sale.ph" is not Lazada’s official "lazada.com.ph". Shop via the official app.'
  },
  {
    type: 'email',
    difficulty: 'Medium',
    sender: 'Google Security <security@google.com>',
    subject: 'Security Alert: New Login',
    body: '<div class="header" style="background-color: #ffffff; padding: 10px; text-align: center; border-bottom: 1px solid #e0e0e0;"><img src="https://i.imgur.com/5n8k2jY.png" alt="Google Logo" style="height: 30px;"></div><p>Dear User,<br>A new login to your Google account was detected. If this wasn’t you, secure your account <a href="http://google-security.com/secure" onmouseover="showURL(\'http://google-security.com/secure\')" onmouseout="hideURL()">here</a>.<br>Google Team</p>',
    isPhishing: true,
    feedback: 'The link points to "google-security.com", not the official "google.com". Secure accounts via Google’s official site.'
  },
  {
    type: 'email',
    difficulty: 'Medium',
    sender: 'Dropbox Support <support@dropbox.com>',
    subject: 'Your File Shared Successfully',
    body: '<div class="header" style="background-color: #0061FF; padding: 10px; text-align: center;"><img src="https://i.imgur.com/1k9m3qZ.png" alt="Dropbox Logo" style="height: 30px;"></div><p>Dear User,<br>Your file was shared successfully on May 12, 2025. View details <a href="https://www.dropbox.com/activity" onmouseover="showURL(\'https://www.dropbox.com/activity\')" onmouseout="hideURL()">here</a>.<br>Dropbox Team</p>',
    isPhishing: false,
    feedback: 'The sender’s domain is "dropbox.com", and the link points to the official Dropbox activity page.'
  },
  {
    type: 'sms',
    difficulty: 'Medium',
    sender: 'UnionBank',
    subject: 'Security Alert',
    body: '[UnionBank] Suspicious activity detected. Secure your account at <a href="http://unionbank-secure.ph/verify" onmouseover="showURL(\'http://unionbank-secure.ph/verify>')" onmouseout="hideURL()">unionbank-secure.ph/verify</a>.',
    isPhishing: true,
    feedback: 'The domain "unionbank-secure.ph" is not UnionBank’s official "unionbankph.com". Contact UnionBank directly.'
  },
  {
    type: 'email',
    difficulty: 'Medium',
    sender: 'eBay Support <support@ebay.com>',
    subject: 'Verify Your Recent Purchase',
    body: '<div class="header" style="background-color: #E53238; padding: 10px; text-align: center;"><img src="https://i.imgur.com/5m7n4qZ.png" alt="eBay Logo" style="height: 30px;"></div><p>Dear Customer,<br>Your recent purchase needs verification. Confirm it <a href="http://ebay-verify.com/confirm" onmouseover="showURL(\'http://ebay-verify.com/confirm\')" onmouseout="hideURL()">here</a> within 24 hours.<br>eBay Team</p>',
    isPhishing: true,
    feedback: 'The link points to "ebay-verify.com", not the official "ebay.com". Verify purchases directly on eBay’s website.'
  },
  // Hard Questions (14: 8 Phishing, 6 Legitimate)
  {
    type: 'email',
    difficulty: 'Hard',
    sender: 'GCash Support <support@gcash.com>',
    subject: 'Security Verification Required',
    body: '<div class="header" style="background-color: #0071CE; padding: 10px; text-align: center;"><img src="https://i.imgur.com/9q2x4kZ.png" alt="GCash Logo" style="height: 30px;"></div><p>Dear User,<br>We detected unusual activity. Verify your account <a href="http://gcash-login.ph/verify" onmouseover="showURL(\'http://gcash-login.ph/verify\')" onmouseout="hideURL()">here</a> to avoid suspension.<br>GCash Team</p>',
    isPhishing: true,
    feedback: 'The sender’s domain "gcash.com" is legitimate, but the link points to "gcash-login.ph". Spoofed sender addresses are common in phishing.'
  },
  {
    type: 'sms',
    difficulty: 'Hard',
    sender: 'PayPal Alert',
    subject: 'Payment Issue',
    body: '[PayPal] Your payment failed. Resolve it at <a href="http://paypal-resolve.com/fix" onmouseover="showURL(\'http://paypal-resolve.com/fix\')" onmouseout="hideURL()">paypal-resolve.com/fix</a>.',
    isPhishing: true,
    feedback: 'The domain "paypal-resolve.com" is not PayPal’s official "paypal.com". Verify payments via the PayPal app.'
  },
  {
    type: 'email',
    difficulty: 'Hard',
    sender: 'PayPal Security <security@paypal.com>',
    subject: 'New Device Login Detected',
    body: '<div class="header" style="background-color: #003087; padding: 10px; text-align: center;"><img src="https://i.imgur.com/6m8k9pZ.png" alt="PayPal Logo" style="height: 30px;"></div><p>Dear User,<br>A login from a new device was detected on May 12, 2025. If this was you, ignore this. If not, secure your account <a href="https://www.paypal.com/signin" onmouseover="showURL(\'https://www.paypal.com/signin\')" onmouseout="hideURL()">here</a>.<br>PayPal Team</p>',
    isPhishing: false,
    feedback: 'The sender’s domain is "paypal.com", and the link points to the official PayPal login page.'
  },
  {
    type: 'sms',
    difficulty: 'Hard',
    sender: 'Globe Telecom',
    subject: 'Account Verification',
    body: '[Globe] Verify your account due to a security update at <a href="http://globe-verify.ph/verify" onmouseover="showURL(\'http://globe-verify.ph/verify\')" onmouseout="hideURL()">globe-verify.ph/verify</a>.',
    isPhishing: true,
    feedback: 'The domain "globe-verify.ph" is not Globe’s official "globe.com.ph". Verify accounts via official channels.'
  },
  {
    type: 'email',
    difficulty: 'Hard',
    sender: 'Microsoft Security <security@microsoft.com>',
    subject: 'Action Required: Account Review',
    body: '<div class="header" style="background-color: #0078D4; padding: 10px; text-align: center;"><img src="https://i.imgur.com/9p2x3kQ.png" alt="Microsoft Logo" style="height: 30px;"></div><p>Dear User,<br>Your Microsoft account needs review. Log in <a href="http://microsoft-login.com/review" onmouseover="showURL(\'http://microsoft-login.com/review\')" onmouseout="hideURL()">here</a> to complete the process.<br>Microsoft Team</p>',
    isPhishing: true,
    feedback: 'The link points to "microsoft-login.com", not the official "microsoft.com". Always access Microsoft services directly.'
  },
  {
    type: 'sms',
    difficulty: 'Hard',
    sender: 'Shopee PH',
    subject: 'Order Issue',
    body: '[Shopee] Your order #456789 has an issue. Fix it at <a href="http://shopee-fix.ph/order" onmouseover="showURL(\'http://shopee-fix.ph/order\')" onmouseout="hideURL()">shopee-fix.ph/order</a>.',
    isPhishing: true,
    feedback: 'The domain "shopee-fix.ph" is not Shopee’s official "shopee.ph". Check orders in the Shopee app.'
  },
  {
    type: 'email',
    difficulty: 'Hard',
    sender: 'Amazon Security <security@amazon.com>',
    subject: 'Account Activity Alert',
    body: '<div class="header" style="background-color: #232F3E; padding: 10px; text-align: center;"><img src="https://i.imgur.com/3p7x4qZ.png" alt="Amazon Logo" style="height: 30px;"></div><p>Dear Customer,<br>We detected unusual activity on your Amazon account. Secure it <a href="https://www.amazon.com/signin" onmouseover="showURL(\'https://www.amazon.com/signin\')" onmouseout="hideURL()">here</a>.<br>Amazon Team</p>',
    isPhishing: false,
    feedback: 'The sender’s domain is "amazon.com", and the link points to the official Amazon sign-in page.'
  },
  {
    type: 'sms',
    difficulty: 'Hard',
    sender: 'BDO Security',
    subject: 'Security Alert',
    body: '[BDO] Suspicious login detected. Secure your account at <a href="http://bdo-login.ph/secure" onmouseover="showURL(\'http://bdo-login.ph/secure\')" onmouseout="hideURL()">bdo-login.ph/secure</a>.',
    isPhishing: true,
    feedback: 'The domain "bdo-login.ph" is not BDO’s official "bdo.com.ph". Contact BDO directly.'
  },
  {
    type: 'email',
    difficulty: 'Hard',
    sender: 'LinkedIn Support <support@linkedin.com>',
    subject: 'New Message in Your Inbox',
    body: '<div class="header" style="background-color: #0077B5; padding: 10px; text-align: center;"><img src="https://i.imgur.com/8p9k3qZ.png" alt="LinkedIn Logo" style="height: 30px;"></div><p>Dear User,<br>You have a new message in your LinkedIn inbox. View it <a href="https://www.linkedin.com/messaging" onmouseover="showURL(\'https://www.linkedin.com/messaging\')" onmouseout="hideURL()">here</a>.<br>LinkedIn Team</p>',
    isPhishing: false,
    feedback: 'The sender’s domain is "linkedin.com", and the link points to the official LinkedIn messaging page.'
  },
  {
    type: 'sms',
    difficulty: 'Hard',
    sender: 'PayMaya',
    subject: 'Transaction Confirmation',
    body: '[PayMaya] Your payment of P2000 was successful. View details at <a href="https://www.paymaya.com/transactions" onmouseover="showURL(\'https://www.paymaya.com/transactions\')" onmouseout="hideURL()">paymaya.com/transactions</a>.',
    isPhishing: false,
    feedback: 'The domain "paymaya.com" is official, and the message provides specific transaction details.'
  },
  {
    type: 'email',
    difficulty: 'Hard',
    sender: 'Google Support <support@google.com>',
    subject: 'Google Account Recovery',
    body: '<div class="header" style="background-color: #ffffff; padding: 10px; text-align: center; border-bottom: 1px solid #e0e0e0;"><img src="https://i.imgur.com/5n8k2jY.png" alt="Google Logo" style="height: 30px;"></div><p>Dear User,<br>Your Google account recovery settings were updated. Review them <a href="https://accounts.google.com/signin" onmouseover="showURL(\'https://accounts.google.com/signin\')" onmouseout="hideURL()">here</a>.<br>Google Team</p>',
    isPhishing: false,
    feedback: 'The sender’s domain is "google.com", and the link points to the official Google sign-in page.'
  },
  {
    type: 'email',
    difficulty: 'Hard',
    sender: 'Slack Support <support@slack.com>',
    subject: 'Workspace Invitation',
    body: '<div class="header" style="background-color: #4A154B; padding: 10px; text-align: center;"><img src="https://i.imgur.com/7n8k5qZ.png" alt="Slack Logo" style="height: 30px;"></div><p>Dear User,<br>You’ve been invited to join a Slack workspace. Accept the invitation <a href="http://slack-invite.com/join" onmouseover="showURL(\'http://slack-invite.com/join\')" onmouseout="hideURL()">here</a>.<br>Slack Team</p>',
    isPhishing: true,
    feedback: 'The link points to "slack-invite.com", not the official "slack.com". Verify Slack invitations directly in the app.'
  },
  {
    type: 'sms',
    difficulty: 'Hard',
    sender: 'Metrobank',
    subject: 'Account Alert',
    body: '[Metrobank] Unusual activity detected. Secure your account at <a href="http://metrobank-secure.ph/verify" onmouseover="showURL(\'http://metrobank-secure.ph/verify\')" onmouseout="hideURL()">metrobank-secure.ph/verify</a>.',
    isPhishing: true,
    feedback: 'The domain "metrobank-secure.ph" is not Metrobank’s official "metrobank.com.ph". Contact Metrobank directly.'
  },
  {
    type: 'email',
    difficulty: 'Hard',
    sender: 'Zoom Support <support@zoom.us>',
    subject: 'Your Meeting Scheduled',
    body: '<div class="header" style="background-color: #0B5CFF; padding: 10px; text-align: center;"><img src="https://i.imgur.com/4p8m6qZ.png" alt="Zoom Logo" style="height: 30px;"></div><p>Dear User,<br>Your meeting is scheduled for May 13, 2025. View details <a href="https://zoom.us/meetings" onmouseover="showURL(\'https://zoom.us/meetings\')" onmouseout="hideURL()">here</a>.<br>Zoom Team</p>',
    isPhishing: false,
    feedback: 'The sender’s domain is "zoom.us", and the link points to the official Zoom meetings page.'
  },
  // Extremely Difficult Questions (24: 18 Phishing, 6 Legitimate)
  {
    type: 'email',
    difficulty: 'Extremely Difficult',
    sender: 'John Reyes <j.reyes@company.com>',
    subject: 'Urgent: Approve Q2 Budget Document',
    body: '<div class="header" style="background-color: #f5f5f5; padding: 10px; text-align: center;"><img src="https://i.imgur.com/8Zf5Y2Z.png" alt="Company Logo" style="height: 30px;"></div><p>Hi,<br>I’ve shared the Q2 budget for your approval. Please review and sign <a href="https://bit.ly/4bCd901" onmouseover="showURL(\'https://company-docs.com/sign\')" onmouseout="hideURL()">here</a> by EOD. Let me know if you need the project breakdown.<br>Best,<br>John</p>',
    isPhishing: true,
    feedback: 'The bit.ly link redirects to "company-docs.com", not an official company domain. Spear phishing often impersonates colleagues with urgent document requests.'
  },
  {
    type: 'sms',
    difficulty: 'Extremely Difficult',
    sender: 'Anna Cruz',
    subject: 'Confirm Meeting Schedule',
    body: '[Anna Cruz] Please confirm our meeting tomorrow at 10 AM. Details at <a href="https://cоmpany.com/meeting" onmouseover="showURL(\'https://cоmpany.com/meeting\')" onmouseout="hideURL()">company.com/meeting</a>.',
    isPhishing: true,
    feedback: 'The domain "cоmpany.com" uses a Cyrillic "о" instead of Latin "o", unlike a legitimate company domain. Spear phishing SMS may impersonate coworkers.'
  },
  {
    type: 'email',
    difficulty: 'Extremely Difficult',
    sender: 'HR Department <hr@company.com>',
    subject: 'Update Your Payroll Information',
    body: '<div class="header" style="background-color: #f5f5f5; padding: 10px; text-align: center;"><img src="https://i.imgur.com/8Zf5Y2Z.png" alt="Company Logo" style="height: 30px;"></div><p>Dear Employee,<br>Due to a system upgrade, please update your payroll details <a href="https://company.hr-portal.com/update" onmouseover="showURL(\'https://company.hr-portal.com/update\')" onmouseout="hideURL()">here</a> by May 15, 2025.<br>HR Team</p>',
    isPhishing: true,
    feedback: 'The link points to "company.hr-portal.com", a subdomain of "hr-portal.com", not the official company domain. Spear phishing targets employees with fake HR requests.'
  },
  {
    type: 'email',
    difficulty: 'Extremely Difficult',
    sender: 'Maria Santos <m.santos@company.com>',
    subject: 'Action Required: Review Vendor Contract',
    body: '<div class="header" style="background-color: #f5f5f5; padding: 10px; text-align: center;"><img src="https://i.imgur.com/8Zf5Y2Z.png" alt="Company Logo" style="height: 30px;"></div><p>Hi,<br>The vendor contract needs your review before we proceed. Access it <a href="https://tinyurl.com/yz901abc" onmouseover="showURL(\'https://vendor-c0ntract.com/review\')" onmouseout="hideURL()">here</a>. Urgent.<br>Thanks,<br>Maria</p>',
    isPhishing: true,
    feedback: 'The tinyurl.com link redirects to "vendor-c0ntract.com", using a zero for "o", not a legitimate company domain. Spear phishing mimics urgent coworker requests.'
  },
  {
    type: 'sms',
    difficulty: 'Extremely Difficult',
    sender: 'IT Admin',
    subject: 'Reset Your Password',
    body: '[IT Admin] Your account password expired. Reset it at <a href="https://%63%6f%6d%70%61%6e%79.com/reset" onmouseover="showURL(\'https://%63%6f%6d%70%61%6e%79.com/reset\')" onmouseout="hideURL()">company.com/reset</a>.',
    isPhishing: true,
    feedback: 'The link uses URL encoding "%63%6f%6d%70%61%6e%79" to mask "company.com", directing to a phishing site, not the official company domain. Spear phishing poses as IT staff.'
  },
  {
    type: 'email',
    difficulty: 'Extremely Difficult',
    sender: 'LinkedIn Support <support@linkedin.com>',
    subject: 'Your Profile Was Viewed',
    body: '<div class="header" style="background-color: #0077B5; padding: 10px; text-align: center;"><img src="https://i.imgur.com/8p9k3qZ.png" alt="LinkedIn Logo" style="height: 30px;"></div><p>Dear User,<br>Your LinkedIn profile was viewed by a recruiter on May 12, 2025. See who viewed it <a href="https://www.linkedin.com/premium/insights" onmouseover="showURL(\'https://www.linkedin.com/premium/insights\')" onmouseout="hideURL()">here</a>.<br>LinkedIn Team</p>',
    isPhishing: false,
    feedback: 'The sender’s domain is "linkedin.com", and the link points to the official LinkedIn premium insights page.'
  },
  {
    type: 'sms',
    difficulty: 'Extremely Difficult',
    sender: 'Twitter Support',
    subject: 'Account Activity Notification',
    body: '[Twitter] Your account had a new login on May 12, 2025. If this was you, ignore this. If not, secure it at <a href="https://twitter.com/settings/security" onmouseover="showURL(\'https://twitter.com/settings/security\')" onmouseout="hideURL()">twitter.com/settings/security</a>.',
    isPhishing: false,
    feedback: 'The domain "twitter.com" is official, and the message follows Twitter’s standard security notification format.'
  },
  {
    type: 'email',
    difficulty: 'Extremely Difficult',
    sender: 'Instagram Support <support@instagram.com>',
    subject: 'Your Post Received High Engagement',
    body: '<div class="header" style="background-color: #E1306C; padding: 10px; text-align: center;"><img src="https://i.imgur.com/2k7p9qZ.png" alt="Instagram Logo" style="height: 30px;"></div><p>Dear User,<br>Your recent post received high engagement. View analytics <a href="https://www.instagram.com/insights" onmouseover="showURL(\'https://www.instagram.com/insights\')" onmouseout="hideURL()">here</a>.<br>Instagram Team</p>',
    isPhishing: false,
    feedback: 'The sender’s domain is "instagram.com", and the link points to the official Instagram insights page.'
  },
  {
    type: 'sms',
    difficulty: 'Extremely Difficult',
    sender: 'Facebook Support',
    subject: 'Friend Request Received',
    body: '[Facebook] You received a new friend request on May 12, 2025. View it at <a href="https://www.facebook.com/friends" onmouseover="showURL(\'https://www.facebook.com/friends\')" onmouseout="hideURL()">facebook.com/friends</a>.',
    isPhishing: false,
    feedback: 'The domain "facebook.com" is official, and the message aligns with Facebook’s notification style.'
  },
  {
    type: 'email',
    difficulty: 'Extremely Difficult',
    sender: 'TikTok Support <support@tiktok.com>',
    subject: 'Your Video Is Trending',
    body: '<div class="header" style="background-color: #000000; padding: 10px; text-align: center;"><img src="https://i.imgur.com/6p8n9qZ.png" alt="TikTok Logo" style="height: 30px;"></div><p>Dear Creator,<br>Your video is trending on TikTok. Check performance <a href="https://www.tiktok.com/analytics" onmouseover="showURL(\'https://www.tiktok.com/analytics\')" onmouseout="hideURL()">here</a>.<br>TikTok Team</p>',
    isPhishing: false,
    feedback: 'The sender’s domain is "tiktok.com", and the link points to the official TikTok analytics page.'
  },
  {
    type: 'sms',
    difficulty: 'Extremely Difficult',
    sender: 'BDO Security',
    subject: 'Transaction Alert',
    body: '[BDO] A transaction of P10,000 was initiated. Confirm it at <a href="https://bdo.com.ph.secure-login.com/confirm" onmouseover="showURL(\'https://bdo.com.ph.secure-login.com/confirm\')" onmouseout="hideURL()">bdo.com.ph.secure-login.com/confirm</a>.',
    isPhishing: true,
    feedback: 'The domain "bdo.com.ph.secure-login.com" is a subdomain of "secure-login.com", not BDO’s official "bdo.com.ph". Subdomain tricks are hard to detect.'
  },
  {
    type: 'email',
    difficulty: 'Extremely Difficult',
    sender: 'Amazon Security <security@amazon.com>',
    subject: 'Action Required: Verify Your Identity',
    body: '<div class="header" style="background-color: #232F3E; padding: 10px; text-align: center;"><img src="https://i.imgur.com/3p7x4qZ.png" alt="Amazon Logo" style="height: 30px;"></div><p>Dear Customer,<br>To comply with our policies, please verify your identity <a href="https://amazon-security.com/verify" onmouseover="showURL(\'https://amazon-security.com/verify\')" onmouseout="hideURL()">here</a>. Failure to verify may limit your account.<br>Amazon Team</p>',
    isPhishing: true,
    feedback: 'The link points to "amazon-security.com", not "amazon.com". The sender’s domain is spoofed, and the request mimics Amazon’s legitimate verification emails.'
  },
  {
    type: 'sms',
    difficulty: 'Extremely Difficult',
    sender: 'Shopee PH',
    subject: 'Order Verification',
    body: '[Shopee] Your order #987654 needs verification. Complete it at <a href="https://shopee.ph-login.com/verify" onmouseover="showURL(\'https://shopee.ph-login.com/verify\')" onmouseout="hideURL()">shopee.ph-login.com/verify</a>.',
    isPhishing: true,
    feedback: 'The domain "shopee.ph-login.com" is not Shopee’s official "shopee.ph". Subdomain-based phishing is a subtle tactic.'
  },
  {
    type: 'sms',
    difficulty: 'Extremely Difficult',
    sender: 'PayMaya',
    subject: 'Security Update',
    body: '[PayMaya] Update your security settings at <a href="https://paymaya.com.security-update.com/update" onmouseover="showURL(\'https://paymaya.com.security-update.com/update\')" onmouseout="hideURL()">paymaya.com.security-update.com/update</a>.',
    isPhishing: true,
    feedback: 'The domain "paymaya.com.security-update.com" is a subdomain of "security-update.com", not PayMaya’s official "paymaya.com".'
  },
  {
    type: 'email',
    difficulty: 'Extremely Difficult',
    sender: 'LinkedIn Security <security@linkedin.com>',
    subject: 'OAuth App Authorization',
    body: '<div class="header" style="background-color: #0077B5; padding: 10px; text-align: center;"><img src="https://i.imgur.com/8p9k3qZ.png" alt="LinkedIn Logo" style="height: 30px;"></div><p>Dear User,<br>A new app requested access to your LinkedIn account. Authorize it <a href="https://linkedin-oauth.com/authorize" onmouseover="showURL(\'https://linkedin-oauth.com/authorize\')" onmouseout="hideURL()">here</a> or deny if unrecognized.<br>LinkedIn Team</p>',
    isPhishing: true,
    feedback: 'The link points to "linkedin-oauth.com", not "linkedin.com". OAuth phishing mimics legitimate app authorization requests.'
  },
  {
    type: 'sms',
    difficulty: 'Extremely Difficult',
    sender: 'Lazada PH',
    subject: 'Account Verification',
    body: '[Lazada] Verify your account at <a href="https://lazada.com.ph.account-verify.com/verify" onmouseover="showURL(\'https://lazada.com.ph.account-verify.com/verify\')" onmouseout="hideURL()">lazada.com.ph.account-verify.com/verify</a>.',
    isPhishing: true,
    feedback: 'The domain "lazada.com.ph.account-verify.com" is a subdomain of "account-verify.com", not Lazada’s official "lazada.com.ph".'
  },
  {
    type: 'email',
    difficulty: 'Extremely Difficult',
    sender: 'GitHub Support <support@github.com>',
    subject: 'Repository Access Notification',
    body: '<div class="header" style="background-color: #24292E; padding: 10px; text-align: center;"><img src="https://i.imgur.com/6p8n9qZ.png" alt="GitHub Logo" style="height: 30px;"></div><p>Dear User,<br>A new login to your GitHub account was detected on May 12, 2025. If this was you, ignore this. If not, secure your account <a href="https://github.com/settings/security" onmouseover="showURL(\'https://github.com/settings/security\')" onmouseout="hideURL()">here</a>.<br>GitHub Team</p>',
    isPhishing: false,
    feedback: 'The sender’s domain is "github.com", and the link points to the official GitHub security settings page.'
  },
  {
    type: 'sms',
    difficulty: 'Extremely Difficult',
    sender: 'GitLab Security',
    subject: 'Pipeline Failure Alert',
    body: '[GitLab] Your pipeline #7890 failed. Review details at <a href="https://tinyurl.com/yz789abc" onmouseover="showURL(\'https://git1ab.com/pipeline\')" onmouseout="hideURL()">tinyurl.com/yz789abc</a>.',
    isPhishing: true,
    feedback: 'The tinyurl.com link redirects to "git1ab.com", which uses a homoglyph "1" instead of "l", unlike the official "gitlab.com". Link shims hide the malicious domain.'
  },
  {
    type: 'email',
    difficulty: 'Extremely Difficult',
    sender: 'Okta Support <support@okta.com>',
    subject: 'MFA Reset Required',
    body: '<div class="header" style="background-color: #007DC1; padding: 10px; text-align: center;"><img src="https://i.imgur.com/5k7n9qZ.png" alt="Okta Logo" style="height: 30px;"></div><p>Dear User,<br>Your Okta MFA settings need to be reset. Complete the process <a href="https://okta-login.security.com/reset" onmouseover="showURL(\'https://okta-login.security.com/reset\')" onmouseout="hideURL()">here</a>.<br>Okta Support Team</p>',
    isPhishing: true,
    feedback: 'The link points to "okta-login.security.com", a subdomain of "security.com", not the official "okta.com". Subdomain masking mimics legitimate Okta domains.'
  },
  {
    type: 'sms',
    difficulty: 'Extremely Difficult',
    sender: 'Jira Support',
    subject: 'Ticket Update',
    body: '[Jira] Ticket #JRA-456 needs your attention. View at <a href="https://%6a%69%72%61.com/ticket" onmouseover="showURL(\'https://%6a%69%72%61.com/ticket\')" onmouseout="hideURL()">jira.com/ticket</a>.',
    isPhishing: true,
    feedback: 'The link uses URL encoding "%6a%69%72%61" to mask "jira.com", but it directs to a phishing site, not the official "jira.atlassian.com". Encoded URLs obscure malicious intent.'
  },
  {
    type: 'email',
    difficulty: 'Extremely Difficult',
    sender: 'Salesforce Security <security@salesforce.com>',
    subject: 'OAuth App Authorization Request',
    body: '<div class="header" style="background-color: #00A1E0; padding: 10px; text-align: center;"><img src="https://i.imgur.com/4m8k7qZ.png" alt="Salesforce Logo" style="height: 30px;"></div><p>Dear Admin,<br>A new app requested OAuth access to your Salesforce account. Authorize it <a href="https://sa1esforce.com/authorize" onmouseover="showURL(\'https://sa1esforce.com/authorize\')" onmouseout="hideURL()">here</a>.<br>Salesforce Team</p>',
    isPhishing: true,
    feedback: 'The link uses a homoglyph "1" in "sa1esforce.com", not the official "salesforce.com". Homoglyphs are subtle and require careful inspection.'
  },
  {
    type: 'sms',
    difficulty: 'Extremely Difficult',
    sender: 'Azure AD',
    subject: 'Security Alert',
    body: '[Azure AD] Suspicious login detected. Secure your account at <a href="https://azure.ad-login.com/verify" onmouseover="showURL(\'https://azure.ad-login.com/verify\')" onmouseout="hideURL()">azure.ad-login.com/verify</a>.',
    isPhishing: true,
    feedback: 'The link points to "azure.ad-login.com", a deceptive subdomain, not the official "azure.microsoft.com". Subdomain masking exploits trust in Azure branding.'
  },
  {
    type: 'email',
    difficulty: 'Extremely Difficult',
    sender: 'Atlassian Support <support@atlassian.com>',
    subject: 'Account Verification Required',
    body: '<div class="header" style="background-color: #0052CC; padding: 10px; text-align: center;"><img src="https://i.imgur.com/3n7k6qZ.png" alt="Atlassian Logo" style="height: 30px;"></div><p>Dear User,<br>Your Atlassian account needs verification. Log in <a href="https://bit.ly/4aBc789" onmouseover="showURL(\'https://at1assian.com/verify\')" onmouseout="hideURL()">here</a>.<br>Atlassian Team</p>',
    isPhishing: true,
    feedback: 'The bit.ly link redirects to "at1assian.com", which uses a homoglyph "1" instead of "l", unlike the official "atlassian.com". Link shims obscure the fake domain.'
  },
  {
    type: 'sms',
    difficulty: 'Extremely Difficult',
    sender: 'PayPal Security',
    subject: 'Account Security Alert',
    body: '[PayPal] Unusual activity detected. Verify at <a href="https://tinyurl.com/xy789def" onmouseover="showURL(\'https://paypa1.com/verify\')" onmouseout="hideURL()">tinyurl.com/xy789def</a>.',
    isPhishing: true,
    feedback: 'The tinyurl.com link redirects to "paypa1.com", using a homoglyph "1" instead of "l", not the official "paypal.com". Link shims hide the malicious domain.'
  }
];

var currentQuestion = 0;
var score = 0;
var totalQuestions = 10;
var currentQuestions = [];

function getRandomQuestions(questions) {
  var easyQuestions = questions.filter(function(q) { return q.difficulty === 'Easy'; });
  var mediumQuestions = questions.filter(function(q) { return q.difficulty === 'Medium'; });
  var hardQuestions = questions.filter(function(q) { return q.difficulty === 'Hard'; });
  var extremelyDifficultQuestions = questions.filter(function(q) { return q.difficulty === 'Extremely Difficult'; });

  var easySelection = shuffle(easyQuestions).slice(0, 2);
  var extremelyDifficultSelection = shuffle(extremelyDifficultQuestions).slice(0, 3);
  var mediumHardQuestions = mediumQuestions.concat(hardQuestions);
  var mediumHardSelection = shuffle(mediumHardQuestions).slice(0, 5);

  return shuffle(easySelection.concat(extremelyDifficultSelection, mediumHardSelection));
}

function loadQuestion() {
  var question = currentQuestions[currentQuestion];
  document.getElementById('current-question').textContent = currentQuestion + 1;
  document.getElementById('total-questions').textContent = totalQuestions;
  document.getElementById('sender').textContent = question.sender;
  document.getElementById('subject').textContent = question.subject;
  document.getElementById('message-body').innerHTML = question.body;
  document.getElementById('progress-bar').style.width = ((currentQuestion + 1) / totalQuestions * 100) + '%';

  var messageDisplay = document.getElementById('message-display');
  if (question.type === 'sms') {
    messageDisplay.classList.add('max-w-[80vw]', 'sm:max-w-sm', 'mx-auto', 'bg-gray-50', 'border-2', 'border-gray-400');
    messageDisplay.classList.remove('border-gray-300');
  } else {
    messageDisplay.classList.remove('max-w-[80vw]', 'sm:max-w-sm', 'mx-auto', 'bg-gray-50', 'border-2', 'border-gray-400');
    messageDisplay.classList.add('border-gray-300');
  }
}

function showFeedback(isCorrect, feedback) {
  var modal = document.getElementById('feedback-modal');
  var title = document.getElementById('feedback-title');
  var message = document.getElementById('feedback-message');
  title.textContent = isCorrect ? 'Correct!' : 'Incorrect';
  title.className = isCorrect ? 'text-green-600 text-lg sm:text-xl font-bold mb-4' : 'text-red-600 text-lg sm:text-xl font-bold mb-4';
  message.textContent = feedback;
  modal.classList.remove('hidden');
}

function showResults() {
  document.getElementById('quiz-container').classList.add('hidden');
  document.getElementById('results-container').classList.remove('hidden');
  document.getElementById('final-score').textContent = score;
  var resultsMessage = document.getElementById('results-message');
  if (score >= 8) {
    resultsMessage.textContent = 'Excellent job! You’re well-equipped to spot phishing attempts. Keep practicing to stay sharp.';
  } else if (score >= 5) {
    resultsMessage.textContent = 'Good effort! You caught some phishing attempts, but review the feedback to improve your skills.';
  } else {
    resultsMessage.textContent = 'Phishing can be tricky! Study the feedback and try again to sharpen your detection skills.';
  }
}

function resetQuiz() {
  currentQuestion = 0;
  score = 0;
  currentQuestions = getRandomQuestions(questions);
  document.getElementById('score').textContent = score;
  document.getElementById('quiz-container').classList.remove('hidden');
  document.getElementById('results-container').classList.add('hidden');
  loadQuestion();
}

// Initialize Quiz
document.addEventListener('DOMContentLoaded', function() {
  console.log('Quiz initialized with', questions.length, 'questions');
  currentQuestions = getRandomQuestions(questions);
  loadQuestion();

  // Event Listeners
  document.getElementById('legitimate-btn').addEventListener('click', function() {
    var question = currentQuestions[currentQuestion];
    var isCorrect = !question.isPhishing;
    if (isCorrect) score++;
    document.getElementById('score').textContent = score;
    showFeedback(isCorrect, question.feedback);
  });

  document.getElementById('phishing-btn').addEventListener('click', function() {
    var question = currentQuestions[currentQuestion];
    var isCorrect = question.isPhishing;
    if (isCorrect) score++;
    document.getElementById('score').textContent = score;
    showFeedback(isCorrect, question.feedback);
  });

  document.getElementById('next-btn').addEventListener('click', function() {
    document.getElementById('feedback-modal').classList.add('hidden');
    currentQuestion++;
    if (currentQuestion < totalQuestions) {
      loadQuestion();
    } else {
      showResults();
    }
  });

  document.getElementById('restart-btn').addEventListener('click', resetQuiz);
});
