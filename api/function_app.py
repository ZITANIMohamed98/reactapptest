import azure.functions as func
import datetime
import json
import logging

app = func.FunctionApp()

@app.route(route="nothingtrigger", auth_level=func.AuthLevel.ANONYMOUS)
def nothingtrigger(req: func.HttpRequest) -> func.HttpResponse:
    logging.info('Python HTTP trigger function processed a request.')
    datetime_now = datetime.datetime.now()  
    name = req.params.get('name')
    if not name:
        try:
            req_body = req.get_json()
        except ValueError:
            pass
        else:
            name = req_body.get('name')

    if name:
        return func.HttpResponse(f"Hello, {name}, you made a request at {datetime_now}.", status_code=200)
    else:
        return func.HttpResponse(
             "This HTTP triggered function executed successfully. Pass a name in the query string or in the request body for a personalized response.",
             status_code=200
        )