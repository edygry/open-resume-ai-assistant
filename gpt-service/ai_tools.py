from dotenv import load_dotenv

load_dotenv()

import google.generativeai as genai
import os



class AiTools:
    def __init__(self):
        genai.configure(api_key=os.environ["API_KEY"])
        self.model = genai.GenerativeModel('gemini-1.5-flash')
        self.prompt_contexts={
            'summary':"could you help me make a well-worded professional summary that will pass through ATS systems and hit the recruiter/hiring manager's desk? only respond with the edited version and nothing else. here is the the professional summary I have:"
        }

    def make_response(self,question,context):
        full_prompt = f"""
{self.prompt_contexts.get(context)}

{question}
"""
        response = self.model.generate_content(full_prompt)
        return response.text
        # print(response.text)

if __name__=="__main__":
    ai_inst = AiTools()
    ai_inst.make_response('random story')