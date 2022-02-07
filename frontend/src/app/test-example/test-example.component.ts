import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpService} from '../services/http.service';
import {AuthenticationService} from '../authentification/authentication.service';


class Language{
  viewValue: string;
  language: string;
  constructor(viewValue: string, language: string) {
    this.viewValue = viewValue;
    this.language = language;
  }
}

@Component({
  selector: 'app-test-example',
  templateUrl: './test-example.component.html',
  styleUrls: ['./test-example.component.css']
})
export class TestExampleComponent implements OnInit {

  selectedValue = 'java';

  editorOptions = {
    language: this.selectedValue,
    colors: {
      'editor.foreground': '#000000',
      'editor.background': '#FFFFFF',
      'editorCursor.foreground': 'red',
      'editor.lineHighlightBackground': '#1600FF21',
      'editorLineNumber.foreground': '#008800',
      'editor.selectionBackground': '#88000030',
      'editor.inactiveSelectionBackground': '#88000015'
    }
  };
  codeJava = 'public class HelloWorld \n' +
    '{\n' +
    ' \n' +
    '       public static void main (String[] args)\n' +
    '       {\n' +
    '             // Ausgabe Hello World!\n' +
    '             System.out.println("Hello World!");\n' +
    '       }\n' +
    '}';

  codeCsharp = 'using System;\n' +
    '\t\t\t\t\t\n' +
    'public class Program\n' +
    '{\n' +
    '\tpublic static void Main()\n' +
    '\t{\n' +
    '\t\tConsole.WriteLine("Hello World");\n' +
    '\t}\n' +
    '}';

  codeKotlin = 'fun main() {\n' +
    '    println("Hello, World!")\n' +
    '}';

  exampleId: number;
  username = '';
  form: FormData;
  languages: Language[] = [
    new Language(this.codeCsharp, 'csharp'),
    new Language(this.codeJava, 'java'),
    new Language(this.codeKotlin, 'kotlin')

  ];

  constructor(private route: ActivatedRoute,
              private router: Router,
              private http: HttpService,
              private authService: AuthenticationService) { }

  ngOnInit(): void {
    this.username = this.authService.username.getValue();
    this.checkPathParam();
  }

  checkPathParam(): boolean {
    this.exampleId = +this.route.snapshot.paramMap.get('id');
    if (0 !== this.exampleId) {
      return true;
    } else {
      return false;
    }
  }

  sendSubmission(): void {
    this.form = new FormData(document.forms.namedItem('testExampleForm'));
    if (this.checkPathParam()) {
      this.form.set('example', String(this.exampleId));
    }
    const file = new File([this.codeJava], 'HelloWorld.java', {type: 'text/plain',});
    this.form.set('code', file);
    this.form.set('username', this.username);
    console.log(this.form);
    console.log(this.form.get('code'));
    this.http.testExample(this.form).subscribe(value => {
      this.router.navigate(['submission-status', value]);
    });
  }

}
