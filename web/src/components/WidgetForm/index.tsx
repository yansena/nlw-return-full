import {useState} from "react";

import bugImg from '../../assets/bug.svg'
import ideaImg from '../../assets/idea.svg'
import  thoughtImg from '../../assets/thought.svg'
import {FeedbackTypeStep} from "./Steps/FeedbackTypeStep";
import {FeedbackContentStep} from "./Steps/FeedbackContentStep";
import {FeedbackSuccessStep} from "./Steps/FeedbackSuccessStep";

export const feedbackTypes = {
  BUG: {
    title:'Problema',
    image: {
      source: bugImg,
      alt: 'Imagem de um inseto'
    },
  },
  IDEA: {
    title:'Ideia',
    image: {
      source: ideaImg,
      alt: 'Imagem de uma lampada'
    },
  },
  OTHER: {
    title:'Outro',
    image: {
      source: thoughtImg,
      alt: 'Iamgem de um balao de pensamento'
    },
  },
};

export type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm(){

  const [ feedbackType, setFeedbackType ] = useState<FeedbackType | null>(null);
  const [ feedbackSend, setFeedbackSend ] = useState(false)

  function handleRestartFeedback(){
    setFeedbackSend(false);
    setFeedbackType(null)
  }
  return(
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      {
        feedbackSend ? (
          <FeedbackSuccessStep onFeedbackRestartRequested={handleRestartFeedback} />
        ) : (
          <>
            {
              !feedbackType ? (
                <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType}/>
              ) : (
                <FeedbackContentStep
                  feedbackType={feedbackType}
                  onFeedbackTypeRestartRequested={handleRestartFeedback}
                  onFeedbackSend={() => setFeedbackSend(true)}
                />
              )
            }
          </>
        )
      }

      <footer className="text-xs text-neutral-400">
        Feito com ♥ pela <a className="underline underline-offset-1" href="https://www.rocketseat.com.br">Rocketseat</a>
      </footer>
    </div>
  );
 }