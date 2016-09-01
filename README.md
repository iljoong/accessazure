# OAuth 2.0 Sample for Accessing Azure Management API
[한글](/README_kr.md)

This sample demonstrates how to implement accessing the Azure management API using various OAuth 2.0 methods.

## OAuth 2.0 grant type

There are several OAuth 2.0 methods to get access token from Azure AD.

Simple guide of choosing OAuth 2.0 methods:
* `Client grant` : If you're building automated backend service and you don't need to authenticate users

* `Code grant`: If you're building a web application (server-side) and you need to authenticate users

* `Implicit grant`: If you're building a client-side web application or SPA (Single Page Application) and you need to authenticate users

Please, refer http://alexbilbie.com/guide-to-oauth-2-grants/ for more information

![OAuth 2.0](http://alexbilbie.com/images/oauth-grants.svg)

## How to setup

You need to setup Azure AD before using this sample. To setup do following steps

1. Create a new Azure AD application

2. Configure Azure AD

    you need to configure following settings for OAuth grant
    
    * `tenant id`
    * `client id`
    * `client secret`
    * `redirect url`
    * `resource`

    `http://localhost:3000/auth/callback` is used for `redirect url` in the samples

3. Add access right to user (Azure service managment)

For more information, please refer [https://azure.microsoft.com/en-us/documentation/articles/resource-group-create-service-principal-portal/](https://azure.microsoft.com/en-us/documentation/articles/resource-group-create-service-principal-portal/)

*Note that* if you're using *Implicit grant* then you need an extra setup in Azure AD.

Please refer, [https://azure.microsoft.com/en-us/documentation/articles/active-directory-dev-understanding-oauth2-implicit-grant/](https://azure.microsoft.com/en-us/documentation/articles/active-directory-dev-understanding-oauth2-implicit-grant/)

## How to run samples

* [Client grant sample](/Clientgrant/README.md)

* [Code grant sample](/Codegrant/README.md)

* [Implict grant sample](/Implicitgrant/README.md)

## Terms & Conditions

* MIT License
