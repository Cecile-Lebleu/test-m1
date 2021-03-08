---
type: [Help]
date: 2020-11-04
title: iOS Migration from version 1 to version 2
categories: ["Technical Questions"]
tags: []
---

We recently updated Diarly from version 1 to version 2, which required a migration for iOS (iPhone and iPad) users. Before rolling out the update, [we talked about the reasons for this migration, and answered some questions in our blog](diarly.app/blog/ios-migration/).

The new app is simply called Diarly, and has a bright blue icon; while the previous app is called Diarly Legacy, with a gray-ish icon. This process is all about migrating your data from Diarly Legacy to Diarly.

![Migration](https://diarly.app/static/354ff534edf0c316b736763249607c0d/37d86/ios-migration.jpg)

While we tried to make the process as easy and seamless as we could for you, a bug still managed to slip by and cause issues for some users.

Rest assured that we took all the right precautions to make sure your data is safe and nothing is lost.

## What's the bug?

If you migrated with version prior to 2.0.0 you could end up in the state where after opening new app no notes would be migrated. 

### How do I get my notes back?

**If you are using iCloud sync in Diarly 2.0.2**, your notes should be automatically downloaded after a few minutes, so you don't need to do anything. Open Diarly and wait a few minutes for your data to be downloaded and imported from iCloud. Waiting time depends on how many journals, notes and images you have.

**If the notes aren't imported automatically**, please open the new Diarly app, go to Settings, and long press on `Import` until the app restarts. After you reopen the app, your notes should be back visible.

**If you still don't see the notes, but still have Diarly Legacy installed**, you can try the following procedure: In Diarly Legacy, go to Settings and long press on `Export` until you see a confirmation dialog. This will unlock the legacy app so that you can retry the migration.

**To skip the automatic migration process and migrate your notes manually**: In Diarly Legacy, long press on the title of the Migration dialog to skip the automatic process. Then, you will be able to manually export all your notes via Settings > Export > Markdown format.

If you still need any help, please contact us at hello@diarly.app so we can take a look at your specific case and help you with the migration and getting back your notes as soon as possible.

## Purchases

For some people, Diarly is asking about a new subscription. If you were already subscribed to Diarly Premium in the Legacy app, you don't have to buy another subscription. Your purchases should have been automatically synced via iCloud.

If the subscription wasn't transferred automatically, please go to `Upgrade > Restore Purchases`. This will fetch the purchase history from iCloud and other platforms. Please make sure Diarly has access to iCloud Drive for this to work.

If you still need any help, please contact us at hello@diarly.app so we can take a look at your specific case and help you restore your purchase as soon as possible.
