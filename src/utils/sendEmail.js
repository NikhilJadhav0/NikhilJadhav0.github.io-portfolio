import emailjs from '@emailjs/browser';
export const sendEmail = (formRef) => {
  return emailjs.sendForm(
    'service_b6wzyzl',    
    'template_lj2f7yr',    
    formRef.current,
    '8uxJhY2yYiC_8VMBe'         
  );
};
