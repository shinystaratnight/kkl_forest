import { Component } from '@angular/core';
import { ContentService } from './api/content.service';
import { DocumentService } from './api/document.service';
import { FolderService } from './api/folder.service';
import { SchemaService } from './api/schema.service';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(
    private contentService: ContentService,
    private documentService: DocumentService,
    private folderService: FolderService,
    private schemaService: SchemaService,
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    this.matIconRegistry.addSvgIcon(
      'logo-tree',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../assets/svg/logo-tree.svg'
      )
    );
    this.matIconRegistry.addSvgIcon(
      'home-card-icon-1',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../assets/svg/home-card-icon-1.svg'
      )
    );
    this.matIconRegistry.addSvgIcon(
      'home-card-icon-2',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../assets/svg/home-card-icon-2.svg'
      )
    );
    this.matIconRegistry.addSvgIcon(
      'home-card-icon-3',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../assets/svg/home-card-icon-3.svg'
      )
    );
    this.matIconRegistry.addSvgIcon(
      'home-card-icon-4',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../assets/svg/home-card-icon-4.svg'
      )
    );
    this.matIconRegistry.addSvgIcon(
      'home-card-icon-5',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../assets/svg/home-card-icon-5.svg'
      )
    );
    this.matIconRegistry.addSvgIcon(
      'home-card-icon-6',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../assets/svg/home-card-icon-6.svg'
      )
    );
    this.matIconRegistry.addSvgIcon(
      'home-card-icon-7',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../assets/svg/home-card-icon-7.svg'
      )
    );
    this.matIconRegistry.addSvgIcon(
      'home-card-icon-8',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../assets/svg/home-card-icon-8.svg'
      )
    );
    this.matIconRegistry.addSvgIcon(
      'home-card-icon-1',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../assets/svg/home-card-icon-1.svg'
      )
    );
    this.matIconRegistry.addSvgIcon(
      'search',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../assets/svg/search.svg'
      )
    );
  }

  title = 'angular_http';

  folderContent$ = this.contentService.folderContent();
  searchContent$ = this.contentService.searchContent();

  createDocument$ = this.documentService.createDocument1();
  deleteDocument$ = this.documentService.deleteDocument1();
  getFolderAttributes$ = this.documentService.documentAppidAppIdDocidDocIdGet(
    'arg1',
    'arg2'
  );

  updateDocument$ = this.documentService.updateDocument1();

  createFolder$ = this.folderService.createfolder1();
  deleteFolder$ = this.folderService.deleteFolder1();
  getFolderAttributesCustom$ =
    this.folderService.folderAppIdAttrNameAttrValueGet(
      'appId',
      'attrName',
      'attrValue'
    );
  getFolderAttributes = this.folderService.folderAppIdFolderIdGet(
    'appId',
    'folderId'
  );
  updateFolder$ = this.folderService.updateFolder1();

  getDocumentAndFolderModel$ = this.schemaService.schemaAppIdGet('appId');
}
