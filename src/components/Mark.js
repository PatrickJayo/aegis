import React from 'react';
import { render } from 'react-dom';
import SyntaxHighlighter from 'react-syntax-highlighter';
import atelierCaveDark from 'react-syntax-highlighter/dist/esm/styles/hljs/atelier-cave-dark';

export default function Mark() {
  return (
    <div className="Mark">
      <SyntaxHighlighter language="Java" style={atelierCaveDark}>
        {`

##Basic Hello World function

CLASS Example3:
	helloWorld():
  		OUTPUT("Hello World");
	END
END


## Runs a loop to find and place all factors of y into an array
## and prints the array

CLASS Example1:
    factors(NUM y):
        NUM {} results;
        NUM count = 0;
        NUM x = 1;
        LOOP(x <= y):
            NUM z = y MOD x;
            IF( z == 0 ):
                results{count} = x;
                count++;
            END
            x++;
        END
        OUTPUT( results );
    END
    factors(250);
END


CLASS Example2:
  findMax(NUM i, NUM j) NUM:
    IF( i > j ):
      RETURN i;
    ELSE:
      RETURN j;
    END
  END
END


##Function to iteratively find the nth fibonacci number

CLASS Example4:
	iterativeFib(NUM n):
  		NUM a = 0;
        NUM b = 1;
        DO(NUM i = 0, i < n, i++):
        	NUM temp = a;
            a = b;
            b = temp + b;
        END
        RETURN a;
	END
END

CLASS Example5:
	iterativeFactorial(NUM n):
  		NUM total = 1;
        DO(NUM i = 1, i <= n, i++):
        	total = total * i;
        END
        RETURN total;
	END
END



CLASS ArraySorter:
    len(NUM{} arr)NUM:
        NUM count = 0;
        LOOP(arr{count} != 0):
            count++;
        END
        RETURN count;
    END
    bubbleSorter(NUM{} array) NUM{} :
        NUM size = len( array );
        DO(NUM i = 0, i < size-1, i++):
            DO(NUM j = 0, j < size-i-1, j++):
                IF(array{j} > array{j+1}):
                    NUM{} temp = array{j};
                    array{j} = array{j+1};
                    array{j+1} = temp;
                END
            END
        END
    END
END

  
##Function to recursively lists the 1st n fibonacci numbers

CLASS Example7:
    fibonacci(NUM n) NUM:
        IF(n==0):
            RETURN 0;
        ELSEIF(n ==1  | n == 2):
            RETURN 1;
        ELSE:
            RETURN fibonacci(n-1) + fibonacci(n-2) ;
        END
    END
    main():
        CHARS fibList = "";
        NUM i = 0;
        LOOP(i<n):
            fibList = fibList + fibonacci(i)+ " ";
            i++;
        END
        OUTPUT( fibList );
    END
    main();
END
        `}
      </SyntaxHighlighter>
    </div>
  );
}

const rootElement = document.getElementById('root');
render(<Mark />, rootElement);
