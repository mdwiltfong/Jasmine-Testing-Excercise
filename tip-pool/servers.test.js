describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
    
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

    it('should add name and earnings',()=>{
      submitServerInfo();
      updateServerTable();
      let serversEntered=document.querySelectorAll('#serverTable tbody tr td');
      expect(serversEntered[0].innerText).toBe('Alice');
      expect(serversEntered[1].innerText).toBe('$0.00');
    })


  afterEach(function() {
    serverId = 0;
    serverTbody.innerHTML = '';
    allServers = {};
})})
