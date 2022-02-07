<script>
    import { updateSearchValue, updateRegionValue } from '../store/filter';
    import Select from 'svelte-select';
import { regionList } from '../utils/enums';

    function handleSearch(event) {
        updateSearchValue(event.target.value.trim().toLowerCase());
    }

    function handleRegionSelect(event) {
        updateRegionValue(event.detail.value);
    }
</script>

<div class="container max-w-screen-xl mb-10 mx-auto flex sm:flex-row flex-col justify-between px-5 xl:px-0">
    <div class="search relative sm:w-1/3">
        <label for="search" class="absolute top-3 left-3 z-10">
            <i class="fas fa-search"></i>
        </label>
        <input type="text" on:input={handleSearch} id="search" class="dark:dark-light h-10 pl-10 outline-none shadow w-full" placeholder="Search for a country...">
    </div>

    <div class="select-container relative shadow">
        <label for="region-select" class="absolute right-4 top-3 z-10"><i class="fas fa-chevron-down"></i></label>
        <Select isClearable={false} items={regionList()} id="region-select" placeholder="Filter by Region" on:select={handleRegionSelect}></Select>
    </div>
</div>