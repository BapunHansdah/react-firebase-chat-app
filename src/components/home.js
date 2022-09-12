import React, { useState, useEffect } from 'react';
import { Textarea } from '@mantine/core';
import { CgRemoveR } from 'react-icons/cg'
import { AiOutlineSend } from 'react-icons/ai'
import { useRef } from 'react';
import { ScrollArea } from '@mantine/core';
import { Button, Stack, Group } from '@mantine/core';

const home = ({ messages, remove, textVal, handleChange, submitHandle, user }) => {
    const [messageDate, setMessageDate] = useState("")
    // const viewport = React.useRef<HTMLDivElement>();
    const inputEl = useRef(null);

    const scrollToBottom = () => {
        inputEl.current.scrollTo({ top: inputEl.current.scrollHeight });
    }

    useEffect(() => {
        scrollToBottom()
    }, [messages])

    return ( 
      <>
        <div>
              <ScrollArea style={{ height: 500 }} viewportRef={inputEl}>

              <div className="message-lists">
                 {
                   messages.map(m=>{
                     return(
                       <div className={`${user.uid === m.uid ? "messages right" : "messages"}`} key={m.id}>   
                          <img src={m.photo}/>
                          <div className="text-box">
                            
                            <div className="remove-button">
                           
                              {
                                user.uid === m.uid ? <CgRemoveR className="rem" onClick={()=>remove(m.id)} />:""
                              }

                            </div>
                            <div className="text">{m.text}</div>
                            <div className="name">{m.name}</div>
                          </div>              
                       </div>
                       )
                   })
                 }
                
              </div>
               </ScrollArea>
              <div className="action-box">
                <div className="textarea">
                 <Textarea
                    value={textVal} 
                    onChange={(e)=>handleChange(e.target.value)}
              placeholder="Type your message..."
              autosize
              minRows={1}
              maxRows={4}
                 />
               </div>
                <div className="button">
                   <button onClick={submitHandle}><AiOutlineSend/></button>
                </div>
              </div>
            </div> 
            </>
    )
}

export default home;