import React from 'react';

export const customSelect = ({
    input,
    className,
    iterableObj,
  }: any) => (
    <select {...input} className={className}>
        {iterableObj.map((item: any) => {
                return (
                  <option
                    key={item.id}
                    value={item.id}>{item.name}</option>
                );
              })}

    </select>
  )

  export const customInputNumber = ({
    input,
    label,
    type,
    className,
    meta: { touched, error }
  }: any) => {
   return ( <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type} className={className}/>
      <br/>
      {touched &&
        ((error && <span>{error}</span>))}
    </div>
  </div>)
  }