"use client";

import CheckBox from "../../componenets/CheckBox";
import { useState, useEffect } from 'react';
import Menu from "../../componenets/Layout/Menu";
import Listing from "../../componenets/Listing";
import { Houselisting } from "../../../../public/SiteData";
import { getListings } from "../../../../public/SiteData";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { useDebouncedCallback } from 'use-debounce';

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export interface filters {
    minPrice: number | null;
    maxPrice: number | null;
    tags: string[];
    search: string;
}

const initialFilters: filters = {
    minPrice: null,
    maxPrice: null,
    tags: [],
    search: "",
};

const Search = () => {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    const currentSearchQuery = searchParams.get('query') || '';

    // Initialize state with whatever is currently in the URL on first page load
    const [filters, setFilters] = useState<filters>({
        ...initialFilters,
        search: currentSearchQuery,
        tags: searchParams.getAll('tags').map(t => t.toLowerCase())
    });

    const handleSearch = useDebouncedCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const term = e.target.value;
        const params = new URLSearchParams(searchParams);
        if (term) {
            params.set('query', term);
        } else {
            params.delete('query');
        }
        replace(`${pathname}?${params.toString()}`);
    }, 300);

    const handleTagToggle = (tagText: string, isChecked: boolean) => {
        const params = new URLSearchParams(searchParams.toString());
        const normalizedTag = tagText.toLowerCase();
        const currentUrlTags = params.getAll('tags');

        if (isChecked) {
            if (!currentUrlTags.includes(normalizedTag)) {
                params.append('tags', normalizedTag);
            }
        } else {
            params.delete('tags');
            currentUrlTags
                .filter((t) => t !== normalizedTag)
                .forEach((t) => params.append('tags', t));
        }

        replace(`${pathname}?${params.toString()}`);
    };

    
    useEffect(() => {
        setFilters((prev) => ({
            ...prev,
            search: searchParams.get('query') || '',
            tags: searchParams.getAll('tags').map(t => t.toLowerCase())
        }));
    }, [searchParams]);

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [listings, setListings] = useState<Houselisting[]>([]); 

    const filteredListings : Houselisting[] = listings.filter((listing) => {
        if (filters.minPrice != null && listing.price < filters.minPrice) {
            return false;
        }

        if (filters.maxPrice != null && listing.price > filters.maxPrice) {
            return false;
        }

        if (filters.tags && filters.tags.length > 0) {
            const hasMatch = listing.tags.some(tag =>
                filters.tags.includes(tag.toLocaleLowerCase())
            );
            if (!hasMatch) return false;
        }

        // FIX #2: Apply search query logic to your display array filters
        if (filters.search) {
            const query = filters.search.toLowerCase();
            // Assumes 'title' or 'description' string parameters exist on Houselisting 
            const matchesTitle = listing.title?.toLowerCase().includes(query);
            const matchesDesc = listing.description?.toLowerCase().includes(query);
            
            if (!matchesTitle && !matchesDesc) return false;
        }

        return true;
    });

    useEffect(() => {
        const fetchListings = async () => {
            try {
                setLoading(true);
                setError(null);
                const data = await getListings();
                setListings(data);
            } catch (err) {
                setError("Failed to fetch listings");
            } finally {
                setLoading(false);
            }
        };
        fetchListings();
    }, []);

    return (
        <div className="bg-[#141616]">
            <div className="text-[#228000] m-2 mt-3 rounded-2xl bg-[#202324] text-base">
                <span className="ml-3">Tags and Filters</span>

                <form onSubmit={(e) => e.preventDefault()} className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 gap-5 p-3 text-[.9rem]">
                    {[
                        "Swimming Pool",
                        "Garage",
                        "Basement",
                        "Attic",
                        "Fireplace",
                        "Garden",
                        "Balcony",
                        "Patio",
                        "Air Conditioning",
                        "Heating System",
                        "Hardwood Floors",
                        "Carpeted Floors"
                    ].map(tag => (
                        <CheckBox
                            key={tag}
                            text={tag}
                            filter={filters}
                             onChange={(checked) => handleTagToggle(tag, checked)}
                        />
                    ))}

                    {/* FIX #1: Clean implementation of interactive input container */}
                    <div className="col-span-2 xs:col-span-3 sm:col-span-4 mt-2">
                        <input 
                            type="text"
                            placeholder="Search homes..."
                            className="w-full max-w-sm p-2 bg-[#1a1c1d] text-white border border-zinc-700 rounded-xl outline-none focus:border-[#228000]" 
                            onChange={handleSearch}
                            defaultValue={currentSearchQuery}
                        />
                    </div>
                </form>
            </div>
            
            <div className="text-[#228000] m-2 mt-3 rounded-2xl bg-[#202324]"> 
                <Listing listings={filteredListings} error={error} loading={loading} />
            </div>
        </div>
    );
};

export default Search;
