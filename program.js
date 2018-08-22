process.stdin.setEncoding('utf-8');

process.stdin.on('readable', function() {
    var input = process.stdin.read();
    if (input !== null) {
        var instruction = input.toString().trim();
        switch (instruction ) {
        	case '/exit':
            	process.stdout.write('Quitting app!\n');
            	process.exit();
            	break;
            case 'language':
            	var language = JSON.stringify(process.env.LANG);
            	process.stdout.write(language);
            	break;
            case 'version':
            	var vers = JSON.stringify(process.versions.node);
            	process.stdout.write(vers);
            	break;
      		default:
            	process.stderr.write('Wrong instruction!\n');
        }
    }
});