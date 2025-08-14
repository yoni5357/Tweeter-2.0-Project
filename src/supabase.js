import { createClient } from '@supabase/supabase-js'
import {API_KEY,baseUrl} from '../apiKey'

export const supabase = createClient(baseUrl,API_KEY);