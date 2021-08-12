describe('Payments with Setup and Tear Down',()=>{
    beforeEach(function () {
        // initialization logic
        billAmtInput.value=10;;
        tipAmtInput.value=8;
        
      });   
    
    it('Input Payment Information is added to table',()=>{
    submitPaymentInfo();
      createCurPayment();
    updateSummary();
      expect(summaryTds[0].innerText).toBe('$10');
      expect(summaryTds[1].innerText).toBe('$8');
      expect(summaryTds[2].innerText).toBe('80%');




    })
    it('',()=>{})

    afterEach(()=>{
      paymentId=0;
      allPayments={};
      paymentTbody.innerHTML=' ';
    })
})