document.getElementById('loginform').addEventListener('submit', function(e){
    e.preventDefault();
    const username=document.getElementById('username').value;
    const password=document.getElementById('password').value;

    if(username==='admin' && password==='admin123')
    {
        localStorage.setItem('role', 'admin');
        window.location.href='dashboard.html';
    }else if(username==='user' && password==='user123')
    {
        localStorage.setItem('role', 'user')
        window.location.href='dashboard.html';
    }else
    {
        alert('Invalid credentials')
    }



});

//sample data 

const serverData = [
    {
      serialNumber: '12345',
      registeredEmail: 'admin@company.com',
      awsAccountID: '1111-2222-3333',
      region: 'us-east-1',
      instanceCreatedDate: '2023-08-01',
      hostName: 'server1',
      publicIPAddress: '192.168.1.1',
      privateIPAddress: '10.0.0.1',
      cidrNetwork: '10.0.0.0/24',
      userDetails: {
        userName: 'admin',
        userID: 'admin01',
        userPassword: '***',
        passPhrase: 'secure-pass'
      },
      groupDetails: {
        primaryGroupName: 'admins',
        groupID: '1001',
        secondaryGroup: 'developers'
      },
      accessPermissions: {
        sudoAccess: true
      },
      commands: {
        groupAddCommand: 'sudo groupadd',
        userAddCommand: 'sudo useradd'
      },
      securityFiles: {
        ppkFile: 'path/to/ppk/file'
      },
      systemConfiguration: {
        installedPackages: 'nginx, nodejs',
        portsEnabled: '22, 80, 443'
      },
      comments: 'This is a critical server'
    }
  ];