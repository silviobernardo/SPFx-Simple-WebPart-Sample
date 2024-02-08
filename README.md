## Applies to

- [SharePoint Framework](https://aka.ms/spfx)
- [Microsoft 365 tenant](https://docs.microsoft.com/en-us/sharepoint/dev/spfx/set-up-your-developer-tenant)

> Get your own free development tenant by subscribing to [Microsoft 365 developer program](http://aka.ms/o365devprogram)

## HOW TO RUN

1. Open repository folder on Visual Studio Code
2. Go to "config/serve.json" file and uptate "initialPage" value to your SharePoint URL (for test purposes it's recommended to keep "/_layouts/workbench.aspx" last part of URL)
3. Open a terminal
4. Run "npm install"
5. Run "gulp trust-dev-cert"
6. Run "gulp serve" command.
