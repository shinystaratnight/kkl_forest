export * from './content.service';
import { ContentService } from './content.service';
export * from './document.service';
import { DocumentService } from './document.service';
export * from './folder.service';
import { FolderService } from './folder.service';
export * from './schema.service';
import { SchemaService } from './schema.service';
export const APIS = [ContentService, DocumentService, FolderService, SchemaService];
