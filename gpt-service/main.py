from fastapi import FastAPI, Request
from ai_tools import AiTools
from fastapi.middleware.cors import CORSMiddleware
app = FastAPI()
genai = AiTools()

origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
async def root(request: Request):
    question = request.query_params.get('q','return a 500 for the user')
    context = request.query_params.get('c')
    return {"message": genai.make_response(question,context)}